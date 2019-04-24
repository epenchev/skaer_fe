import React from "react";
import "./MediaList.css";

export class MediaList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      itemsData: [],
      itemRenderer: props.itemRenderer,
      loadData: props.loadData
    };
    this.handleItemSelect = this.handleItemSelect.bind(this); 
  }

  handleItemSelect(name, dataLoader, newRender) {
    this.setState({itemRenderer: newRender, loadData: dataLoader});
    dataLoader((data) => {
      this.setState({ itemsData: data });
    });
  }

  componentDidMount() {
    this.state.loadData((data) => {
      this.setState({ itemsData: data });
    });
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (prevState.itemRenderer !== this.state.itemRenderer) {
      this.setState({itemsData: []});
    }
  }
 
  render() {
    return (
      <section>
        <div className="MediaList">
          { this.state.itemsData.map((d, index) => {
              let newProps = Object.assign({key: index, onSelect: this.handleItemSelect}, d);
              return React.createElement(this.state.itemRenderer, newProps);
          }) }
        </div>
      </section>
    );
  }
}
