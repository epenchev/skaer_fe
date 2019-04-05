import React from 'react';
// get our fontawesome imports
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class MediaItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render_old() {
    return (
      <a href={`/items/id`} className="itemLink">
        <img src={this.props.poster === null ? 'http://via.placeholder.com/300x450'
            : `https://image.tmdb.org/t/p/w200/${this.props.poster}`} className="imgResponsive" />
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

  render() {
    return (
      <a href={`/items/id`} className="itemLink">
        <img src={this.props.poster === null ? 'http://via.placeholder.com/300x450'
          : `${this.props.poster}`} className="imgResponsive" />
        <div>
          <FontAwesomeIcon icon={faPlay} className="playIcon"/>
        </div>
        <h3 className="itemTitle">{this.props.title}</h3>
      </a>
    );
  }

}
