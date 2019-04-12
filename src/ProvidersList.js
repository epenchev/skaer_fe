import React from 'react';
import './MediaItemList.css';

export class ProvidersList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      providers: []
    };
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

  componentWillMount() {
    this.loadData();
  }

  render() {
    console.log(this.props.show);
    if (this.props.show) {
      return (
        <section>
          <div className="MediaItemList">
            {this.state.providers.map((provider, index) => {
              return (
                <a href={`/providers/id`} >
                  <img src={provider.cover_image} alt={provider.name} />
                  <h3>{provider.name}</h3>
                </a>
              )
            })}
          </div>
        </section>
      );
    }
    else {
      return(null);
    }
  }
}
