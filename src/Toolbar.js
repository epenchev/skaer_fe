import React from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


export class Toolbar extends  React.Component {
  constructor(props, context) {
    super(props);
    this.state = { dropTitle: 'Collections' };
    this.handleSelect = this.handleSelect.bind(this);
    this.createSelector = this.createSelector.bind(this);
  }

  handleSelect(selString, e) {
    this.setState({dropTitle: selString});
  }

  createSelector(selString) {
    return (<NavDropdown.Item onSelect={(e) => this.handleSelect(selString, e)}>{selString}</NavDropdown.Item>);
  }

  render() {
    return (
      <Navbar bg="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title={this.state.dropTitle} id="basic-nav-dropdown">
              {this.createSelector('Create Collection')}
              <NavDropdown.Divider />
              {this.createSelector('Collections')}
              {this.createSelector('Playlists')}
              {this.createSelector('Online Content')}
              <NavDropdown.Divider />
              {this.createSelector('Settings')}
              {this.createSelector('Help')}
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
