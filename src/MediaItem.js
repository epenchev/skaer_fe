import React from 'react';
// get our fontawesome imports
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './MediaItem.css';

const initialStyle = {
};

export class MediaItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { iconOpacity: 0 };
    this.state.styles = initialStyle;
  }

  render_old() {
    return (
      <a href={`/items/id`} className="itemLink">
        <img src={this.props.poster === null ? 'http://via.placeholder.com/300x450'
            : `https://image.tmdb.org/t/p/w200/${this.props.poster}`} className="imgResponsive" alt=""/>
        <div>
          <a href={`/items/id`} class="playIcon">
            <div> 
              <FontAwesomeIcon icon="play" />
            </div>
          </a>
        </div>
        <h3 className="itemTitle">{this.props.title}</h3>
      </a>
    );
  }

  mouseOut() {
    this.setState({iconOpacity: 0});
    this.setState({styles: initialStyle})
  }

  mouseOver() {
    const brightnessStyle = {
      WebkitFilter: 'brightness(0.25)'
    };
    this.setState({iconOpacity: 1});
    this.setState({styles: brightnessStyle});
  }

  render() {
    return (
        <a href={`/items/id`} className="itemLink" onMouseOut={() => this.mouseOut()} onMouseOver={() => this.mouseOver()} >
        <img src={this.props.poster === null ? 'http://via.placeholder.com/300x450'
          : `${this.props.poster}`} className="imgResponsive" style={this.state.styles} alt=""/>
        <h3 className="itemTitle">{this.props.title}</h3>
        <div>
          <FontAwesomeIcon icon={faPlay} className="playIcon"
            style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)', opacity: this.state.iconOpacity }}/>
        </div>
      </a>
    );
  }

}
