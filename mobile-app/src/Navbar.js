import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navibar() {
  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="#home">uifry</Navbar.Brand>

        <Nav className="me-auto">
          <Nav.Link href="#features">Home</Nav.Link>
          <Nav.Link href="#pricing">AboutUs</Nav.Link>
          <Nav.Link href="#pricing">pricing</Nav.Link>
          <Nav.Link href="#pricing">features</Nav.Link>
        </Nav>
        <Nav>
          <Button variant="dark">Download</Button>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navibar;
