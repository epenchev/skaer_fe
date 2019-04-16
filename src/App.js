import React, { Component } from 'react';
import {Toolbar} from './Toolbar';
import {MediaList} from './MediaList';
import {fetchProviders} from './ApiCalls';
import {fetchProviderEntries} from './ApiCalls';
import {renderProvider} from './ContentProvider';
import {MediaEntry} from './MediaEntry';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faIgloo } from '@fortawesome/free-solid-svg-icons'

library.add(faIgloo)

function apiFetchProvidersEntries(onSuccess) {
  fetchProviderEntries('2', onSuccess);
}

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
          <MediaList loadData={apiFetchProvidersEntries} itemRenderer={MediaEntry} />
        </div>
      </div>
    );
  }
}

export default App;
