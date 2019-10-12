import React from 'react';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import FacebookIcon from '@material-ui/icons/Facebook';
import siginStyles from './signin.styles';

import { Copyright } from '../../components/Copyright';
import LinkRouter from '../../components/Navigation/LinkRouter';


const useStyles = siginStyles;


const SignUpSide = () => {
  const classes = useStyles({});

  const handleSignup = () => {};

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
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
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              label="Last Name"
              name="lastName"
              autoComplete="last name"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
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

            <Button
              type="button"
              fullWidth
              variant="contained"
              color="default"
              className={classes.facebookLogin}
              startIcon={<FacebookIcon color="primary" />}
            >
              Login with Facebook
            </Button>
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
