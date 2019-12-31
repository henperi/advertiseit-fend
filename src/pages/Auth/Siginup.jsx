import React, { useState } from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

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
import { registerUser } from '../../store/modules/auth/actions';
import { validateSignupData } from './validations';
import { FacebookLogin } from '../../components/FacebookLogin';


const useStyles = siginStyles;


const SignUpSide = () => {
  const classes = useStyles({});

  const { dispatch, state } = useGlobalStore();

  const [signupErrors, setSignupErrors] = useState(null);

  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    accountType: 'Customer',
  });

  const handleSignup = async () => {
    const validationErrors = await validateSignupData(signupData);
    if (!validationErrors) {
      return dispatch(registerUser(signupData));
    }

    return setSignupErrors({ ...validationErrors.errors.detailsObject });
  };

  const handleOnChange = (event) => {
    setSignupErrors({ ...signupErrors, [event.target.name]: '' });
    setSignupData({
      ...signupData,
      [event.target.name]: event.target.value,
    });
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
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="First Name"
              name="firstName"
              autoComplete="first name"
              autoFocus
              onChange={(event) => handleOnChange(event)}
            />
            {
              signupErrors && signupErrors.firstName && (
              <Typography color="secondary">{signupErrors.firstName}</Typography>)
            }
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Last Name"
              name="lastName"
              autoComplete="last name"
              onChange={(event) => handleOnChange(event)}
            />
            {
              signupErrors && signupErrors.lastName && (
              <Typography color="secondary">{signupErrors.lastName}</Typography>)
            }
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Phone Number"
              name="phone"
              autoComplete="phone"
              placeholder="08033311144"
              onChange={(event) => handleOnChange(event)}
            />
            {
              signupErrors && signupErrors.phone && (
              <Typography color="secondary">{signupErrors.phone}</Typography>)
            }
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={(event) => handleOnChange(event)}
            />
            {
              signupErrors && signupErrors.email && (
              <Typography color="secondary">{signupErrors.email}</Typography>)
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
              signupErrors && signupErrors.password && (
              <Typography color="secondary">{signupErrors.password}</Typography>)
            }
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => handleSignup()}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs />
              <Grid item>
                <LinkRouter to="/signin" variant="body2">
                  Have an account? Sign In
                </LinkRouter>
              </Grid>
            </Grid>
            <FacebookLogin label="Signup With Facebook" />
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
};

export default SignUpSide;
