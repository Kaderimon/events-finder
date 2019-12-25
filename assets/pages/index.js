import React from "react";
import { PropTypes } from "mobx-react";
import debounce from "lodash/debounce";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
/* containers */
import ArtistDetails from "../containers/ArtistDetailsContainer";
import EventList from "../containers/EventListContainer";
import FavoritesContainer from "../containers/FavoritesListContainer";
/* components */
import MainAppBar from "./../components/MainAppBar";
import SearchButton from "./../components/SearchButton";

const useStyles = makeStyles({
  spacingFix: {
    marginTop: "1%",
    width: "100%"
  }
});

const App = ({ artistStore }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <MainAppBar>
        <SearchButton
          action={debounce(query => {
            return artistStore.fetchArtist(query);
          }, 1000)}
          artistStore={artistStore}
        />
      </MainAppBar>
      <Grid
        container
        justify="center"
        spacing={2}
        className={classes.spacingFix}
      >
        <Grid container item xs={10} sm={5} spacing={2}>
          <Grid item xs={12}>
            <ArtistDetails />
          </Grid>
          <Grid item xs={12}>
            <EventList />
          </Grid>
        </Grid>
        <Grid container item xs={10} sm={5} spacing={2}>
          <Grid item xs={12}>
            <FavoritesContainer />
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

App.propTypes = {
  artistStore: PropTypes.observableObject
};

export default App;
