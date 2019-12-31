import React from 'react';
import { FacebookProvider, Login } from 'react-facebook';
import { Button, makeStyles } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import { grey } from '@material-ui/core/colors';
import { useGlobalStore } from '../../store';
import { facebookAuth } from '../../store/modules/auth/actions';

const useStyles = makeStyles((theme) => ({
  facebookLogin: {
    margin: theme.spacing(3, 0, 2),
    padding: theme.spacing(1, 0),
    backgroundColor: grey[100],
  },
}));
export const FacebookLogin = ({ label }) => {
  const classes = useStyles({});
  const { dispatch } = useGlobalStore();

  const handleFacebookLogin = (response) => {
    // console.log(response.tokenDetail.accessToken);
    dispatch(facebookAuth(response.tokenDetail.accessToken));
  };
  const handleError = (e) => {
    console.log(e);
  };

  return (
    <FacebookProvider appId="496335694431326">
      <Login
        scope=""
        onCompleted={handleFacebookLogin}
        onError={handleError}
      >
        {({ handleClick }) => (
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="default"
            className={classes.facebookLogin}
            startIcon={<FacebookIcon color="primary" />}
            onClick={handleClick}
          >
            {label || 'Login with Facebook'}
          </Button>
        )}
      </Login>
    </FacebookProvider>
  );
};
