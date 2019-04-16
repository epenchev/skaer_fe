import React from 'react';
import './MediaItemList.css';
import {ProviderItem} from './ProviderItem.js';
import {MediaItemList} from './MediaItemList.js';


export class ProvidersList extends React.Component {
  constructor(props) {
    super(props);
    this.handleItemSelect = this.handleItemSelect.bind(this);
    this.state = { providers: [], showMedia: false };
  }

  handleItemSelect(provId) {
    console.log('Hi there');
    this.setState({ showMedia: true });
  }

  loadData() {
    const apiUrl = `http://localhost:8080/providers_list`
    console.log(apiUrl)
    fetch(apiUrl)
      .then(response => {
        console.log('Status: ' + response.status);
        console.log('response text: ' + response.statusText);

        response.json().then(data => {
          this.setState({ providers: data });
        });
      })
      .then(body => {})
        .catch(err => {
          console.log('Fetch Error: ', err);
        }) 
  }

  componentDidMount() {
    this.loadData();
  }
  
  componentDidUpdate(prevProps) {
    /*
    if (!prevProps.show) {
      this.setState({ showMedia: false });
      }*/
  }

  //componentWillReceiveProps() {
    //this.setState({ showMedia: false });
  //}

  render() {
    if (this.props.show) {
      if (this.state.showMedia) {
        return(<MediaItemList />);
      }
      return (
        <section>
          <div className="MediaItemList">
            {this.state.providers.map((provider, index) => {
              return (
                <ProviderItem key={provider.id} name={provider.name} 
                  image={provider.cover_image} 
                  type={provider.category}
                  selectHandler={this.handleItemSelect}
                />
              )
            })}
          </div>
        </section>
      );
    } else {
        return (null);
    }
  }
}
