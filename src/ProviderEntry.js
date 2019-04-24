import React from 'react';
import './ProviderEntry.css';
import {MediaEntry} from "./MediaEntry";
import {fetchProviderEntries} from "./ApiCalls";


export function apiFetchProvidersEntries(onSuccess) {
  fetchProviderEntries("2", onSuccess);
}

export class ProviderEntry extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.onSelect(this.props.name, apiFetchProvidersEntries, MediaEntry);
  }

  render() {
    return (
      <a onClick={this.handleClick} id={this.props.id} className="cover-photo" href="#">
        <img src={this.props.cover_image} alt={this.props.name}/>
        <h2>{this.props.name}</h2>
        <p>{this.props.category}</p>
      </a>
    );
  }
}
