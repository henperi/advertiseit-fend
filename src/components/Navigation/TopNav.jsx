import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { locationShape } from 'react-router-props';

import {
  AppBar, Toolbar, IconButton, Typography,
} from '@material-ui/core';

import BackIcon from '@material-ui/icons/KeyboardArrowLeftRounded';
import BasketIcon from '@material-ui/icons/ShoppingBasketRounded';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles(() => ({
  root: {
    bottom: '0',
  },
  appBar: {
    top: 0,
    bottom: 'auto',
  },
  menuButton: {
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
}));


const TopNav = (props) => {
  const classes = useStyles(props);
  const { location } = props;

  const getIcon = () => {
    if (location.pathname === '/profile') {
      return (
        <IconButton
          className={classes.menuButton}
          color="inherit"
          aria-label="settings"
        >
          <SettingsIcon />
        </IconButton>
      );
    }

    return (
      <IconButton
        className={classes.menuButton}
        color="inherit"
        aria-label="cart"
      >
        <BasketIcon />
      </IconButton>
    );
  };

  return (
    <AppBar position="sticky" color="default" className={classes.appBar}>
      <Toolbar variant="dense" className={classes.toolbar}>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="open drawer"
        >
          <BackIcon />
        </IconButton>
        <Typography>Advertise It</Typography>
        {getIcon()}
      </Toolbar>
    </AppBar>
  );
};

TopNav.propTypes = {
  location: locationShape.isRequired,
};

export default TopNav;
