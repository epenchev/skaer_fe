import React, { Component } from "react";
import ControlPanel from './ControlPanel';
import ControlDrawer from './ControlDrawer';
import ProvidersGrid from './ProvidersGrid';
import ProviderPlaylists from './ProviderPlaylists';
import {BrowserRouter, Switch, Route} from 'react-router-dom';


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
        <BrowserRouter>
          <Switch>
            <Route path={"/providers"} component={ProvidersGrid} />
            <Route path={"/provider/:id"} component={ProviderPlaylists} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;

