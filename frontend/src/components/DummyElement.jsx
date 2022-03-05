import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import DummyCreator from "../views/DummyCreator"
import { person, trash } from "./Icons";

const DummyElement = ({ dummy, deleteCallback, updateCallback }) => {
  const { id, name } = dummy;
  const [show, setShow] = useState(false)
  const [dummi, setDummy] = useState(dummy)

  const handleClose = () => {
    setShow(false);
  }
  const onSave = dummyToSave => {
    updateCallback(dummyToSave)
    handleClose()
  }
  return (
    <>
      <div className="card m-2 text-center" onClick={()=>setShow(true)}>
        <div className="card-body d-flex justify-content-between ">
          <div className="">
            {person(2)} ID: {id} Name: {name}{" "}
          </div>
          <div className="">
            <Button variant="light" onClick={() => deleteCallback(dummy)}>
              {trash(1.5)}
            </Button>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Dummy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <DummyCreator dummy={dummi} setDummy={setDummy} />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => onSave(dummi)}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default DummyElement;
