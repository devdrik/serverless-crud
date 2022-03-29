import React, {useState} from 'react';
import DummyList from './views/DummyList';
import DummyCreator from './views/DummyCreator';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { setAuthToken } from "./service/DummyService";

import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';

Amplify.configure(awsExports);

const App = ({user}) => {

  const [view, setview] = useState("list")

  setAuthToken(user.signInUserSession.idToken.jwtToken)
  console.log(user.signInUserSession.idToken.jwtToken) 

  function viewSwitch(view) {
    switch (view) {
      case "list":
        return(<DummyList></DummyList>)
      case "creator":
        return(<DummyCreator></DummyCreator>)  
      default:
        break;
    }
  }

  return (
    <>
    <Navbar bg="light" expand="lg">
      <Navbar.Brand>React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={() => setview("list")} active={view ==="list"}>List Dummies</Nav.Link>
          <Nav.Link onClick={() => setview("creator")} active={view ==="creator"}>Create Dummies</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    {viewSwitch(view)}
    </>
  );
}

export default withAuthenticator(App);
