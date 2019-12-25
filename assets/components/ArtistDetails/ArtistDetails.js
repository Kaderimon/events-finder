import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import LoadingIndicator from "../LoadingIndicator";

const useStyles = makeStyles({
  card: {
    height: "175px",
    display: "flex"
  },
  details: {
    display: "flex",
    flexDirection: "column"
  },
  emptyDetails: {
    width: "100%"
  },
  emptyText: {
    paddingTop: "16px",
    paddingLeft: "16px"
  },
  media: {
    width: "50%"
  }
});

function ArtistDetails({ artist = {}, loading }) {
  if (loading) return <LoadingIndicator />;
  const classes = useStyles();
  const { name, thumb_url, url, upcoming_event_count } = artist;

  return (
    <Card className={classes.card}>
      {name ? (
        <React.Fragment>
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
        </React.Fragment>
      ) : (
        <div className={classes.emptyDetails}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.emptyText}
          >
            Let's start with typing something in search...
          </Typography>
          <Divider />
          <Typography gutterBottom variant="h5" component="p"></Typography>
        </div>
      )}
    </Card>
  );
}

ArtistDetails.propTypes = {
  artist: PropTypes.shape({
    name: PropTypes.string,
    thumb_url: PropTypes.string,
    url: PropTypes.string,
    upcoming_event_count: PropTypes.number
  }),
  loading: PropTypes.bool
};

export default ArtistDetails;
