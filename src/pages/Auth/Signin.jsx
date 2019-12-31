import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Redirect } from 'react-router-dom';

import siginStyles from './styles';
import { Copyright } from '../../components/Copyright';
import LinkRouter from '../../components/Navigation/LinkRouter';
import { AuthSideImage } from '../../components/AuthSideImage';
import { useGlobalStore } from '../../store';
import { loginUser } from '../../store/modules/auth/actions';
import { validateSigninData } from './validations';
import { FacebookLogin } from '../../components/FacebookLogin';

const useStyles = siginStyles;

const SignInSide = () => {
  const classes = useStyles({});
  const { dispatch, state } = useGlobalStore();

  const [signinErrors, setSigninErrors] = useState(null);

  const [signinData, setSigninData] = useState({
    email: '',
    password: '',
  });

  const handleOnChange = (event) => {
    setSigninErrors({ ...signinErrors, [event.target.name]: '' });
    setSigninData({
      ...signinData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSignin = async () => {
    const validationErrors = await validateSigninData(signinData);
    if (!validationErrors) {
      return dispatch(loginUser(signinData));
    }

    return setSigninErrors({ ...validationErrors.errors.detailsObject });
  };

  if (state.auth.isAuthenticated) {
    return <Redirect to="/home" />;
  }

  return (
    <Grid container component="main" className={classes.root}>
      <AuthSideImage />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon color="inherit" />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(event) => handleOnChange(event)}
              autoFocus
            />
            {
              signinErrors && signinErrors.email && (
              <Typography color="secondary">{signinErrors.email}</Typography>)
            }
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              onChange={(event) => handleOnChange(event)}
            />
            {
              signinErrors && signinErrors.password && (
              <Typography color="secondary">{signinErrors.password}</Typography>)
            }
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => handleSignin()}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <LinkRouter to="#" variant="body2">
                  Forgot password?
                </LinkRouter>
              </Grid>
              <Grid item>
                <LinkRouter to="/signup" variant="body2">
                  Don&apos;t have an account? Sign Up
                </LinkRouter>
              </Grid>
            </Grid>
            <FacebookLogin label="Login With Facebook" />
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignInSide;
