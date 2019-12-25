import React from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
/* containers */
import EventContainer from "../../containers/EventContainer";
import FavoriteButtonContainer from "../../containers/FavoriteButtonContainer";
/* components */
import MainAppBar from "../../components/MainAppBar";

const Event = () => {
  let { id } = useParams();

  return (
    <React.Fragment>
      <MainAppBar>
        <FavoriteButtonContainer eventid={id} />
      </MainAppBar>
      <Grid container justify="center">
        <EventContainer eventid={id} />
      </Grid>
    </React.Fragment>
  );
};

export default Event;
