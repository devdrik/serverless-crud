import React, {useState} from 'react';
import DummyList from './views/DummyList';
import DummyCreator from './views/DummyCreator';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const App = () => {

  const [view, setview] = useState("list")

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

export default App;
