import React, { Component } from "react";
import ControlPanel from './ControlPanel';
import ControlDrawer from './ControlDrawer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showDrawer: false };
    this.onClickCPanelMenu = this.onClickCPanelMenu.bind(this);
  }

  onClickCPanelMenu() {
    this.setState({showDrawer: !this.state.showDrawer});
  }

  render() {
    return (
      <div className="App">
      <ControlPanel onMenuButton={this.onClickCPanelMenu} />
      <ControlDrawer open={this.state.showDrawer} onClick={this.onClickCPanelMenu} />
      </div>
    );
  }
}

export default App;

