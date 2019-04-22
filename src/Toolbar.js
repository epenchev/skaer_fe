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
    return (
      <NavDropdown.Item onSelect={(e) => this.props.onSelect(title, faIcon)} href={this.props.href}>
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
    //this.state = { selectTitle: "Collections", faIcon: faFolder };
    this.state = this.getInitialValue();
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    const selT = localStorage.getItem("selectTitle");
    const selI = localStorage.getItem("selectIcon");
    this.setState({ selectTitle: selT, selectIcon: selI });
  }

  handleSelect(selTitle, selfaIcon) {
    localStorage.setItem("selectTitle", selTitle);
    localStorage.setItem("selectIcon", selfaIcon);
    console.log("state set");
  }

  getInitialValue() {
    const selT = localStorage.getItem("selectTitle");
    const selI = localStorage.getItem("selectIcon");
    if (!selT || !selI) {
        return { selectTitle: "Collections", faIcon: faFolder };
    } else {
        return { selectTitle: selT, faIcon: {selI} };
    }
  }

  render() {
    const selTitle = this.state.selectTitle;
    const selIcon = this.state.faIcon;
    console.log(selIcon);
    return (
      <Navbar expand="lg" fixed="top" className="navbar navbar-expand-md navbar-dark navbar-theme">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills" className="mr-auto">
            <NavDropdown className="navbar-dropdown"
            title={<div><FontAwesomeIcon icon={selIcon} className="dropdown-item-icon"/>
            <span>{selTitle}</span></div> } id="basic-nav-dropdown">
              <DropdownItem faIcon={faFolderPlus} title="Create Collection" href="/create_collection" onSelect={this.handleSelect} />
              <NavDropdown.Divider />
              <DropdownItem faIcon={faFolder} title="Collections" href="/collections" onSelect={this.handleSelect} />
              <DropdownItem faIcon={faList} title="Playlists" href="/playlists" onSelect={this.handleSelect} />
              <DropdownItem faIcon={faGlobe} title="Online Content" href="/providers" onSelect={this.handleSelect} />
              <NavDropdown.Divider />
              <DropdownItem faIcon={faCog} title="Settings" href="/settings" onSelect={this.handleSelect} />
              <DropdownItem faIcon={faQuestionCircle} title="Help" href="/help" onSelect={this.handleSelect} />
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
