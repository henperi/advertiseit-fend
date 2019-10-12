import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import HomeIcon from '@material-ui/icons/HomeRounded';
import ExploreIcon from '@material-ui/icons/ExploreRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonIcon from '@material-ui/icons/Person';
import AddIcon from '@material-ui/icons/AddCircleRounded';

import { AppBar } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    bottom: '0',
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
});


const AppBottomNavigation = (props) => {
  const classes = useStyles(props);
  const [value, setValue] = React.useState('recents');

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.history.push(`/${newValue.toLowerCase()}`);
  };

  return (
    <AppBar position="fixed" color="primary" className={classes.appBar}>
      <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
        <BottomNavigationAction label="Home" value="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Explore" value="Explore" icon={<ExploreIcon />} />
        <BottomNavigationAction label="Add Product" value="Add" icon={<AddIcon />} />
        <BottomNavigationAction label="Favorite" value="Favorite" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Profile" value="Profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </AppBar>
  );
};

export default AppBottomNavigation;
