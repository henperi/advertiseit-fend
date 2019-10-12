import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';


// Components
import Layout from '../components/Layouts';

// Pages
import NotFound from '../pages/NotFound';

import SignIn from '../pages/Auth/Signin';
import SignUp from '../pages/Auth/Siginup';


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


const AuthRoutes = () => {
  const classes = useStyles({});

  return (
    <Layout>
      <BrowserRouter>
        <div className={classes.root}>
          <div className={classes.content}>
            <Switch>
              <Route exact path="/" component={SignIn} />
              <Route exact path="/signin" component={SignIn} />
              <Route exact path="/signup" component={SignUp} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Layout>
  );
};

export default AuthRoutes;
