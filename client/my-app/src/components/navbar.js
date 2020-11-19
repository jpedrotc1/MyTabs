import { Navbar, Nav } from "react-bootstrap";
import React from "react";

function NavbarComponent() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="/">MyTabs</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Nav className="mr-auto">
          <Nav.Link href="/addNewTab">Add new tab</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  );
}

export default NavbarComponent;
