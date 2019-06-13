import React from 'react';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import MediaGrid from './MediaGrid';
import {fetchProviderEntries} from "./ApiCalls";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './styles/media.css';


class MediaEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = { iconOpacity: 0 };
    this.state.styles = {};
  }

  mouseOut() {
    this.setState({ iconOpacity: 0 });
    this.setState({ styles: {} });
  }

  mouseOver() {
    const brightnessStyle = {
      WebkitFilter: 'brightness(0.45)'
    };
    this.setState({ iconOpacity: 1 });
    this.setState({ styles: brightnessStyle });
  }

  render() {
    return (
      <a href={`/items/id`} className="itemLink" onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()} >
        <img src={this.props.poster === null ? 'http://via.placeholder.com/300x450'
          : `${this.props.url}`} className="imgResponsive" style={this.state.styles} alt=""/>
        <h3 className="itemTitle">{this.props.title}</h3>
        <div>
          <FontAwesomeIcon icon={faPlay} className="playIcon"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', opacity: this.state.iconOpacity }}/>
        </div>
      </a>
        );
      }
}

export default class MediaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemsData: [] };
  }

  componentDidMount() {
    fetchProviderEntries(this.props.match.params.id, (data) => {
      this.setState({ itemsData: data });
    });
  }

  render() {
    return (
      <div className='grid-container'>
        <div className='grid-list'>
          <MediaGrid items={this.state.itemsData}
            gridItem={MediaEntry} />
        </div>
      </div>
    );
  }
}
