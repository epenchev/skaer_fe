import React, { Component } from 'react';
import {Toolbar} from './Toolbar';
import {MediaItemList} from './MediaItemList';
import {ProvidersList} from './ProvidersList';
import MediaElement from './MediaElement';
import './App.css';
import './MediaElement.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { renderProviders: false };
    this.handleSelect = this.onDropDownSelect.bind(this);
  }

  onDropDownSelect(eventKey) {
    if (eventKey === '4') {
        this.setState({ renderProviders: true });
    } else {
        this.setState({ renderProviders: false });
    }
  }

  render() {
    return (
      <div className="App">
        <Toolbar doHandleSelect={this.handleSelect}/>
        <div className="container">
          <ProvidersList show={this.state.renderProviders} />
        </div>
      </div>
    );
  }
}

export default App;
