import React from "react";
import PropTypes from "prop-types";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

function EventInfo({ description, lineup, location, date }) {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary">
          {date.month} {date.day}
        </Typography>
        <Typography variant="h5" component="h2">
          Event
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          {location}
        </Typography>
        <Typography variant="body2" component="p">
          {description}
        </Typography>
        <Typography color="textSecondary" gutterBottom>
          Lineup: {lineup.join(", ")}
        </Typography>
      </CardContent>
    </Card>
  );
}

EventInfo.propTypes = {
  description: PropTypes.string,
  lineup: PropTypes.array,
  location: PropTypes.string,
  date: PropTypes.shape({
    month: PropTypes.string,
    day: PropTypes.string
  })
};

export default EventInfo;
