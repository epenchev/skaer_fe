import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },

  image: {
    height: 150,
    width: 'auto',
  },

});


function FullWidthGrid(props) {
  const { classes } = props;
  let elements = [0, 1, 2, 3, 4, 5, 6, 7].map(value => (
          'http://localhost:8080/res/images/yes-movies.jpg'
        ));
  if (elements.length % 6 != 0) {
    const toAdd = 6 - (elements.length % 6);
    console.log(toAdd);
    let dummy = new Array(toAdd).fill('a');
    console.log(dummy);
    elements.concat(dummy);
  }
  console.log(elements);
  return (
    <div className={classes.root}>
      <Grid container direction="row" xs={12} justify="center" spacing={2}>
        {[0, 1, 2, 3, 4, 5, 6, 7].map(value => (
        <Grid item >
          <img className={classes.image} src='http://localhost:8080/res/images/yes-movies.jpg' alt='spiderman'/>
        </Grid>
        ))}
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);

