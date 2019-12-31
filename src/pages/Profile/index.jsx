import React, { useEffect } from 'react';
import {
  Grid, Avatar, makeStyles, Typography, Button,
} from '@material-ui/core';
import { useGlobalStore } from '../../store';
import { fetchFollowMetrics } from '../../store/modules/follow/actions';
import { removeAuthUser } from '../../store/modules/auth/actions';
import { getAppConstants } from '../../constants';
import { Bio } from '../../components/Bio';


const useStyles = makeStyles((theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.dark,
    height: theme.spacing(10),
    width: theme.spacing(10),
  },
  profile: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
  },
  column: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
  },
}));
const Profile = () => {
  const classes = useStyles({});
  const { state, dispatch } = useGlobalStore();
  const profile = state.auth.user.Profile;

  const getProfileImage = () => {
    if (profile.image) {
      return profile.image;
    }
    return getAppConstants('appAvatar');
  };

  useEffect(() => {
    (fetchFollowMetrics(dispatch));
  }, [dispatch]);

  const handleClick = () => {
    console.log('click');
  };
  const handleLogout = () => {
    dispatch(removeAuthUser());
  };

  return (
    <Grid container>
      <Grid item xs={12} className={classes.profile}>
        <Avatar className={classes.avatar} src={getProfileImage()} />
      </Grid>
      <Grid item xs={12} className={classes.profile}>
        <Typography onClick={() => handleClick()} variant="h6">{`${profile.firstName} ${profile.lastName}`}</Typography>
      </Grid>
      <Grid item xs={12} className={classes.profile}>
        {profile.stateOfResidence
          && profile.nationality
          && <Typography variant="h6">{`${profile.stateOfResidence} ${profile.nationality}`}</Typography>}
      </Grid>
      <Grid item xs={12} className={classes.profile}>
        <Bio bio={profile.bio} />
      </Grid>

      <Grid container>
        <Grid item xs={4} className={classes.column}>
          <Typography variant="h6">{state.follow.followers}</Typography>
          <Typography variant="h6">Products</Typography>
        </Grid>
        <Grid item xs={4} className={classes.column}>
          <Typography variant="h6">{state.follow.followers}</Typography>
          <Typography variant="h6">Followers</Typography>
        </Grid>
        <Grid item xs={4} className={classes.column}>
          <Typography variant="h6">{state.follow.follwing}</Typography>
          <Typography variant="h6">Following</Typography>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={6} className={classes.column}>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="secondary"
            size="small"
            onClick={() => null}
          >
            Become a Promoter
          </Button>
        </Grid>
      </Grid>
      <Grid container justify="center">
        <Grid item xs={6} className={classes.column}>
          <Button
            type="button"
            fullWidth
            variant="contained"
            color="primary"
            onClick={() => handleLogout()}
          >
            Logout
          </Button>
        </Grid>
      </Grid>


    </Grid>
  );
};

export default Profile;
