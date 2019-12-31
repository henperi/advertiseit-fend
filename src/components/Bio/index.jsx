import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    width: '100%',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export const Bio = ({ bio }) => {
  const classes = useStyles({});
  const bull = <span className={classes.bullet}>•</span>;

  const [isEditing, setIsEditing] = useState(false);
  const [bioValue, setBioValue] = useState('');

  const handleAddBio = () => {
    if (isEditing) {
      return setIsEditing(false);
    }
    return setIsEditing(true);
  };

  const handleOnChange = (event) => {
    setBioValue(event.target.value);
  };

  const getButtonLabel = () => {
    if (isEditing) {
      return 'Save Bio';
    }
    if (bio || bioValue) {
      return 'Edit Bio';
    }
    return 'Add Bio';
  };


  return (
    <div className={classes.card}>
      <Typography component="h2">
        {bull}
        Your Bio
        {bull}
      </Typography>
      <CardContent>
        {isEditing
          ? (

            <TextField
              fullWidth
              multiline
              variant="outlined"
              placeholder="Start typing your bio"
              disabled={!isEditing}
              defaultValue={bio || bioValue}
              onChange={handleOnChange}
            />
          )
          : (
            <Typography variant="body2" component="p">
              {bio || bioValue}
            </Typography>
          )}
      </CardContent>
      <CardActions>
        <Button
          fullWidth
          size="small"
          color="default"
          variant="contained"
          onClick={() => handleAddBio()}
        >
          <Typography>{getButtonLabel()}</Typography>
        </Button>
      </CardActions>
    </div>
  );
};
