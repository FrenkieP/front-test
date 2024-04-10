import { Navbar, Container, Nav } from "react-bootstrap";

function NavbarCom() {
  return (
    <Navbar bg="dark" data-bs-theme="dark" size="lg">
      <Container>
        <Navbar.Brand href="#">
          <img
            src="bootstrap-logo.svg"
            className="brand"
            alt="Logo"
            width={30}
            height={24}
          />{" "}
          My CRM
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto"></Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarCom;
