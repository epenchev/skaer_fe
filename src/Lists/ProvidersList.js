import React from "react";
import {EntryList} from "./EntryList";
import {fetchProviders} from "../ApiCalls";
import './ProviderEntry.css';


class ProviderEntry extends React.Component {
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

export class ProvidersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { itemsData: [] };
  }

  componentDidMount() {
    fetchProviders((data) => {
      this.setState({ itemsData: data });
    });
  }

  render() {
    return(
      <EntryList itemData={this.state.itemsData}
        itemRender={ProviderEntry} />
    );
  }
}
