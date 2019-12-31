
import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Grid, IconButton } from '@material-ui/core';
import FavouriteIcon from '@material-ui/icons/FavoriteRounded';
import ShareIcon from '@material-ui/icons/ShareRounded';
import ViewIcon from '@material-ui/icons/RemoveRedEyeRounded';

export const ProductCard = ({
  image, title, price, Owner,
}) => {
  const handleLike = () => {
    console.log('click');
  };
  return (
    <Card className="MuiEngagementCard--01">
      <CardMedia
        className="MuiCardMedia-root"
        image={image}
      />
      <CardContent className="MuiCardContent-root">
        <Grid container>
          <Grid item xs={10}>
            <Typography
              className="MuiTypography--heading"
              variant="h6"
              gutterBottom
            >
              {title}
            </Typography>
          </Grid>
          <Grid item xs={2}>
            <Avatar src={Owner.image} />
          </Grid>
        </Grid>
        <Grid container spacing={1}>
          <Grid item xs={2}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              size="small"
              onClick={() => handleLike()}
            >
              <FavouriteIcon />
            </IconButton>
          </Grid>
          <Grid item xs={2}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              size="small"
              onClick={() => handleLike()}
            >
              <ShareIcon />
            </IconButton>
          </Grid>
          <Grid item xs={2}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              size="small"
              onClick={() => handleLike()}
            >
              <ViewIcon />
            </IconButton>
          </Grid>
          <Grid item xs={2}>
            <IconButton
              edge="end"
              color="inherit"
              aria-label=""
              size="small"
              onClick={() => handleLike()}
            >
              {`N${price}`}
            </IconButton>
          </Grid>

        </Grid>
      </CardContent>
    </Card>
  );
};
