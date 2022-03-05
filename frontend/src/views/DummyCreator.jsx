import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { saveDummy } from "../service/DummyService";

function DummyCreator({ dummy, setDummy }) {
  const [name, setName] = useState(dummy ? dummy.name : "");

  const updateDummy = (e) => {
    setName(e.target.value);
    setDummy(Object.assign({}, dummy, { name: e.target.value }));
  };

  const submit = () => {
    console.log("name", name);
    saveDummy({ name });
    setName("");
  };

  return (
    <Form>
      <Form.Group controlId="formGroupName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Dummy name"
          value={name}
          onChange={updateDummy}
        ></Form.Control>
      </Form.Group>
      {dummy ? (
        ""
      ) : (
        <Button variant="primary" onClick={submit}>
          Create
        </Button>
      )}
    </Form>
  );
}

export default DummyCreator;
