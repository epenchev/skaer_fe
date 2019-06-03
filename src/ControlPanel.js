import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 2,
  },
  search: {
    flexGrow: 1,
  },
});


class ControlPanel extends Component {
  render() {
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="fixed">
          <Toolbar>
            <IconButton onClick={this.props.onMenuButton} edge="start"
              className={classes.menuButton} color="inherit" aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            {/*<IconButton color="inherit">
              <SearchIcon className={classes.search} />
            </IconButton>
            */
            }
            <Typography variant="h6" className={classes.title}>
            </Typography>
             <Button color="inherit">Login</Button>
          </Toolbar>
       </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(ControlPanel);

