import React from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
/* containers */
import EventContainer from "../../containers/Event/index";
import FavoriteButtonContainer from "./../../containers/Favorite/index";
/* components */
import MainAppBar from "../../components/MainAppBar/index";

const Event = props => {
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
