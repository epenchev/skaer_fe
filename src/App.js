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
    const sources = [{src: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4', type: 'video/mp4'}];
		const config = {};
    const tracks = {};

    return (
      <div className="App">
        <Toolbar doHandleSelect={this.handleSelect}/>
        <div className="container">
          <ProvidersList show={this.state.renderProviders} />
          <div className="fixed">
            <MediaElement
		          id="player1"
		          mediaType="audio"
		          preload="none"
              width="640"
              height="360"
              controls
              sources={JSON.stringify(sources)}
		          options={JSON.stringify(config)}
		          tracks={JSON.stringify(tracks)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
