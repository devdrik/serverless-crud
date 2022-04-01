// Create clients and set shared const values outside of the handler.

// Create a DocumentClient that represents the query to add an item
const dynamodb = require('aws-sdk/clients/dynamodb');
const docClient = new dynamodb.DocumentClient();

// Get the DynamoDB table name from environment variables
const tableName = process.env.SAMPLE_TABLE;


/**
 * A simple example includes a HTTP post method to add one item to a DynamoDB table.
 */
exports.deleteItemHandler = async (event) => {
    if (event.httpMethod !== 'DELETE') {
        throw new Error(`postMethod only accepts POST method, you tried: ${event.httpMethod} method.`);
    }
    // All log statements are written to CloudWatch
    console.info('received:', event);

      // Get id from pathParameters from APIGateway because of `/{id}` at template.yaml
    const id = event.pathParameters.id;

    // Get the item from the table
    // https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/DynamoDB/DocumentClient.html#get-property
    var params = {
        TableName : tableName,
        Key: { id: id },
    };

    const result = await docClient.delete(params).promise();

    const response = {
        statusCode: 200,
        headers: {
            "Access-Control-Allow-Origin" : "*", // Required for CORS support to work
          }
    };

    // All log statements are written to CloudWatch
    console.info(`response from: ${event.path} statusCode: ${response.statusCode} body: ${response.body}`);
    return response;
};
