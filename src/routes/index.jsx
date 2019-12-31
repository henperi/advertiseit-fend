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
import ProtectedRoute from '../components/Navigation/ProtectedRoute';
import SignIn from '../pages/Auth/Signin';
import SiginUp from '../pages/Auth/Siginup';
import { useGlobalStore } from '../store';
import TopNav from '../components/Navigation/TopNav';
import { Main } from '../components/Layouts/Main';
import { AppLoader } from '../components/AppLoader';

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


const Routes = () => {
  const classes = useStyles({});
  const { state } = useGlobalStore();
  const { auth, app } = state;


  if (!app.isReady) {
    return <AppLoader />;
  }

  return (
    <Layout>
      <BrowserRouter>
        <div className={classes.root}>
          <div className={classes.content}>
            {auth.isAuthenticated && (
            <Route path="" component={TopNav} />
            )}
            <Main>
              <Switch>
                <ProtectedRoute exact path="/" component={Home} />
                <Route exact path="/signin" component={SignIn} />
                <Route exact path="/signup" component={SiginUp} />
                <ProtectedRoute exact path="/home" component={Home} />
                <ProtectedRoute exact path="/explore" component={Explore} />
                <ProtectedRoute exact path="/profile" component={Profile} />
                <Route component={NotFound} />
              </Switch>
            </Main>
            {auth.isAuthenticated && (
              <Route path="" component={AppBottomNav} />
            )}
          </div>
        </div>
      </BrowserRouter>
    </Layout>
  );
};

export default Routes;
