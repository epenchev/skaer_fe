import React from 'react';
import { Navbar, DropdownButton, Dropdown, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


export class Toolbar extends  React.Component {
  constructor(props, context) {
    super(props);
    this.state = { dropTitle: 'Collections' };
  }

  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title={this.state.dropTitle} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.3">Create Collection</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.1">Collections</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Playlists</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Online Content</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Settings</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Help</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
