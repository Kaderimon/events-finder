import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  CardActions,
  Button,
  Typography,
  makeStyles
} from "@material-ui/core";

const useStyles = makeStyles({
  card: {
    maxHeight: 345,
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  media: {
    width: "50%"
  }
});

function ArtistDetails({ artist = {} }) {
  const classes = useStyles();
  const { name, thumb_url, url, upcoming_event_count } = artist;

  return name ? (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={thumb_url}
        title="Contemplative Reptile"
      />
      <div className={classes.details}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="subtitle1" component="p">
            Upcoming events: {upcoming_event_count}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            color="primary"
            href={url}
            target="_blank"
            rel="noreferrer noopener"
          >
            Learn More
          </Button>
        </CardActions>
      </div>
    </Card>
  ) : (
    <Typography gutterBottom variant="h5" component="h2">
      Let's start with typing something in search...
    </Typography>
  );
}

ArtistDetails.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string,
    thumb_url: PropTypes.string,
    url: PropTypes.string,
    upcoming_event_count: PropTypes.number
  })
};

export default ArtistDetails;
