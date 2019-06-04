import React, { Component } from "react";
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import CastIcon from '@material-ui/icons/Cast';
import AccountCircle from '@material-ui/icons/AccountCircle';

const styles = theme => ({
  menuButton: {
    flexGrow: 2.5,
  },
  functionButtons: {
    flexGrow: 1,
  },
  accountButton: {
    display: 'flex',
    flexGrow: 2.5,
    justifyContent: 'right',
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'space-evenly',
  }
});


class ControlPanel extends Component {
  render() {
    const {classes} = this.props;
    return (
        <AppBar position="fixed">
          <Toolbar>
            <div className={classes.menuButton}>
              <IconButton onClick={this.props.onMenuButton} edge="start"
                  className={classes.menuButton} color="inherit" aria-label="Menu">
                <MenuIcon />
              </IconButton>
            </div>
            <div className={classes.functionButtons}>
              <div className={classes.buttonBox} >
              <IconButton color="inherit">
                <SearchIcon />
              </IconButton>
              <IconButton color="inherit">
                <MoreIcon  />
              </IconButton>
              <IconButton color="inherit">
                <CastIcon />
              </IconButton>
              </div>
            </div>
            <div className={classes.accountButton}>
              <IconButton color="inherit">
                <AccountCircle />
              </IconButton>
            </div>
          </Toolbar>
       </AppBar>
    );
  }
}

export default withStyles(styles)(ControlPanel);

