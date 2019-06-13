import React from 'react';
import Grid from '@material-ui/core/Grid';


export default class MediaGrid extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const elements = this.props.items.map((d, index) => {
      let newProps = Object.assign({key: index}, d);
      return React.createElement(this.props.gridItem, newProps);
    });
    return (
      <div id='media-grid'>
        <Grid container spacing={2}>
        {elements.map((value, index) => (
          <Grid key={index} item>
            {value}
          </Grid>
        ))}
        </Grid>
      </div>
    );
  }
}
