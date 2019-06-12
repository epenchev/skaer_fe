import React from 'react';
import MediaGrid from './MediaGrid';
import {fetchProviders} from './ApiCalls';
import './styles/providers.css';


class ListEntry extends React.Component {
  render() {
    const targetUrl = "/provider/" + this.props.id;
    return (
      <a href={targetUrl} id={this.props.id} className="cover-photo">
        <img src={this.props.cover_image} alt={this.props.name}/>
        <h2>{this.props.name}</h2>
        <p>{this.props.category}</p>
      </a>
    );
  }
}

export default class ProvidersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { providers: [] };
  }

  componentDidMount() {
    fetchProviders((data) => {
      this.setState({ providers: data });
    });
  }

  render() {
    return(
      <MediaGrid items={this.state.providers}
        gridItem={ListEntry} />
    );
  }
}
