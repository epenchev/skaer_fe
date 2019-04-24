import React from "react";
import "./Toolbar.css";
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from "react-bootstrap";
import { faFolder } from "@fortawesome/free-solid-svg-icons";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { faThLarge } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const DropDownProps = {
  "1" : { title: "Create Collection", icon: faFolderPlus },
  "2" : { title: "Collections", icon: faFolder },
  "3" : { title: "Playlists", icon: faList },
  "4" : { title: "Online Content", icon: faGlobe },
  "5" : { title: "Settings", icon: faCog },
  "6" : { title: "Help", icon: faQuestionCircle }
};

class DropdownItem extends React.Component {
  constructor(props, context) {
    super(props);
  }

  render() {
    const title = DropDownProps[this.props.eventKey].title;
    const faIcon = DropDownProps[this.props.eventKey].icon;
    return (
      <NavDropdown.Item eventKey={this.props.eventKey}>
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
    this.state = { selected: "2" };
    this.handleSelect = this.handleSelect.bind(this);
  }

  handleSelect(eventKey) {
    this.setState({ selected: eventKey });
    // Notify parent
    this.props.onSelection(eventKey);
  }

  render() {
    const selTitle = DropDownProps[this.state.selected].title;
    const selIcon = DropDownProps[this.state.selected].icon;
      return (
      <Navbar expand="lg" fixed="top" className="navbar navbar-expand-md navbar-dark navbar-theme">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" activeKey="0" className="mr-auto" onSelect={k => this.handleSelect(k)}>
            <NavDropdown className="navbar-dropdown"
              title={<div><FontAwesomeIcon icon={faThLarge} className="dropdown-main-item-icon"/></div> } 
            id="basic-nav-dropdown">
              <DropdownItem eventKey="1"/>
              <NavDropdown.Divider />
              <DropdownItem eventKey="2" />
              <DropdownItem eventKey="3" />
              <DropdownItem eventKey="4" />
              <NavDropdown.Divider />
              <DropdownItem eventKey="5" />
              <DropdownItem eventKey="6" />
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
