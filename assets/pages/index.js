import React from "react";
import debounce from "lodash/debounce";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
/* containers */
import ArtistDetails from "../containers/Artist";
import EventList from "./../containers/Events";
import FavoritesContainer from "./../containers/Favorites/index";
/* components */
import MainAppBar from "./../components/MainAppBar/index";
import SearchButton from "./../components/SearchButton/index";

const useStyles = makeStyles({
  spacingFix: {
    marginTop: "1%"
  }
});

const App = props => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <MainAppBar>
        <SearchButton
          action={debounce(query => {
            return props.artistStore.fetchArtist(query);
          }, 1000)}
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

export default App;
