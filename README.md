# Serverless-Crud tests on AWS

This repo holds test setups to deploy a simple more or less skeleton for an application that has full crud capabilities through a frontend, leveraging serverless services on aws.

## useful learings

## current deployment
### backend:
use 
``` 
sam build
sam deploy
```

### frontend:
add amplify with
``` 
amplify init 
```
get userpool with 
```
amplify import auth
```
and deploy with
```
amplify push
```

when the backend ist deployed entiraly new, then use
```
amplify remove auth
```
add make a new import after that

### Get an API-Token of a conginto secured API 
Easiest with aws cli:

```
# ask for token:
aws cognito-idp initiate-auth --client-id <client-id> --auth-flow USER_PASSWORD_AUTH --auth-parameters USERNAME=<username>,PASSWORD=<password>

# that returns a password challenge, if user has not yet changed the pw. Solve with:
aws cognito-idp admin-set-user-password --username <username> --password <newPassword> --permanent --user-pool-id <user-pool-id>

# get the token:
aws cognito-idp initiate-auth --client-id <client-id> --auth-flow USER_PASSWORD_AUTH --auth-parameters USERNAME=<username>,PASSWORD=<password>
```

### adding cognito sign-in to the frontend
- cognito UI link: https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-app-integration.html
- integrate UI with Amplify: https://docs.amplify.aws/lib/auth/getting-started/q/platform/js/
- use Userpool created with sam: https://docs.amplify.aws/cli/auth/import/
- add userpooldomain: https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpooldomain.html

## Next Steps:
### automate build pipeline
- how to use deployment as code?
- testing?