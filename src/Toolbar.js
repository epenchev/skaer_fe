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


export class Toolbar extends  React.Component {
  constructor(props, context) {
    super(props);
    this.state = {
      dropTitle: 'Collections',
      dropIcon: faList
    };
    this.handleSelect = this.handleSelect.bind(this);
    this.createSelector = this.createSelector.bind(this);
    this.faIcons = {
      PlusIcon   : faFolderPlus,
      FolderIcon : faFolder,
      ListIcon   : faList,
      GlobeIcon  : faGlobe,
      CogIcon    : faCog,
      QMarkIcon  : faQuestionCircle
    };
  }

  handleSelect(selString, selIcon, e) {
    this.setState({
      dropTitle: selString,
      dropIcon : selIcon
    });
  }

  createSelector(selString, faIcon) {
    return (
      <NavDropdown.Item onSelect={(e) => this.handleSelect(selString, faIcon, e)}>
        <div>
          <FontAwesomeIcon icon={faIcon} className="dropdown-item-icon"/>
          <span className="dropdown-item-label">{selString}</span>
        </div>
      </NavDropdown.Item>
    );
  }

  render() {
    return (
      <Navbar expand="lg" fixed="top" className="navbar navbar-expand-md navbar-dark navbar-theme">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="mr-auto">
            <NavDropdown className="navbar-dropdown" title={<div><FontAwesomeIcon icon={this.state.dropIcon} className="dropdown-item-icon"/> <span>{this.state.dropTitle}</span></div> } id="basic-nav-dropdown">
              {this.createSelector('Create Collection', this.faIcons.PlusIcon)}
              <NavDropdown.Divider />
              {this.createSelector('Collections', this.faIcons.FolderIcon)}
              {this.createSelector('Playlists', this.faIcons.ListIcon)}
              {this.createSelector('Online Content', this.faIcons.GlobeIcon)}
              <NavDropdown.Divider />
              {this.createSelector('Settings', this.faIcons.CogIcon)}
              {this.createSelector('Help', this.faIcons.QMarkIcon)}
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
