import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PropsTypes from 'prop-types';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(8),
  },
}));

export const Main = ({ children }) => {
  const classes = useStyles({});
  return (
    <div className={classes.root}>
      { children }
    </div>
  );
};


Main.propTypes = {
  children: PropsTypes.element.isRequired,
};
