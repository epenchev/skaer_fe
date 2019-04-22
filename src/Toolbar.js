import React from 'react';
import './Toolbar.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


class DropdownItem extends React.Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    const faIcon = this.props.faIcon;
    const title = this.props.title;
    const eventKey = this.props.eventKey;
    return (
      <NavDropdown.Item href='/providers' onSelect={(e) => this.props.onSelect(eventKey, title, faIcon)}>
        <div>
          <FontAwesomeIcon icon={faIcon} className="dropdown-item-icon"/>
          <span className="dropdown-item-label">{title}</span>
        </div>
      </NavDropdown.Item>
    );
  }
}

export class Toolbar extends  React.Component {
  constructor(props, context) {
    super(props);
    this.state = { selectTitle: 'Collections', faIcon: faFolder, selectKey: '2' };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey, selTitle, selfaIcon) {
    this.setState({ selectTitle: selTitle, faIcon: selfaIcon, selectKey: eventKey });
    this.props.doHandleSelect(eventKey);
  }

  render() {
    const selTitle = this.state.selectTitle;
    const selIcon = this.state.faIcon;
    return (
      <Navbar expand="lg" fixed="top" className="navbar navbar-expand-md navbar-dark navbar-theme">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="mr-auto">
            <NavDropdown className="navbar-dropdown"
            title={<div><FontAwesomeIcon icon={selIcon} className="dropdown-item-icon"/>
            <span>{selTitle}</span></div> } id="basic-nav-dropdown">
              <DropdownItem faIcon={faFolderPlus} title='Create Collection' eventKey='1' onSelect={this.handleSelect} />
              <NavDropdown.Divider />
              <DropdownItem faIcon={faFolder} title='Collections' eventKey='2' onSelect={this.handleSelect} />
              <DropdownItem faIcon={faList} title='Playlists' eventKey='3' onSelect={this.handleSelect} />
              <DropdownItem faIcon={faGlobe} title='Online Content' eventKey='4' onSelect={this.handleSelect} />
              <NavDropdown.Divider />
              <DropdownItem faIcon={faCog} title='Settings' eventKey='5' onSelect={this.handleSelect} />
              <DropdownItem faIcon={faQuestionCircle} title='Help' eventKey='6' onSelect={this.handleSelect} />
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="input" placeholder="Search" className="mr-sm-2"/>
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
