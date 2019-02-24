import React, { Component } from 'react';
import {Toolbar} from './Toolbar';
import {MediaItems} from './MediaItems';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Toolbar />
        <MediaItems />
      </div>
    );
  }
}

export default App;
