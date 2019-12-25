import React from "react";
import { useParams } from "react-router-dom";
import { Grid } from "@material-ui/core";
/* containers */
import EventContainer from "../../containers/EventContainer/index";
import FavoriteButtonContainer from "../../containers/FavoriteButtonContainer/index";
/* components */
import MainAppBar from "../../components/MainAppBar/index";

const Favorites = () => {
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

export default Favorites;
