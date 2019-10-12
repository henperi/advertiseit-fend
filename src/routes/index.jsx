import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';


// Components
import Layout from '../components/Layouts';
import AppBottomNav from '../components/Navigation/BottomNav';

// Pages
import Home from '../pages/Home';
import Explore from '../pages/Explore';
import NotFound from '../pages/NotFound';
import Profile from '../pages/Profile';


const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: '1 0 auto',
    '&:after': {
      content: '00a0',
      display: 'block',
      height: 0,
      visibility: 'hidden',
    },
  },
});


const isAuthenticated = true;

const Routes = () => {
  const classes = useStyles({});

  return (
    <Layout>
      <BrowserRouter>

        <div className={classes.root}>
          <div className={classes.content}>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/explore" component={Explore} />
              <Route exact path="/profile" component={Profile} />
              <Route component={NotFound} />
            </Switch>
            {isAuthenticated && (
              <Route path="" component={AppBottomNav} />
            )}
          </div>
        </div>

      </BrowserRouter>
    </Layout>
  );
};

export default Routes;
