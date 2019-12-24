import React from "react";

import { observer, inject } from "mobx-react";
import ArtistDetails from "../../components/ArtistDetails/ArtistDetails";

const ArtistDetailsContainer = inject(({ rootStore }) => {
  return {
    artistStore: rootStore.artistStore
  };
})(
  observer(({ artistStore }) => {
    return <ArtistDetails artist={artistStore.getArtist()} />;
  })
);

export default ArtistDetailsContainer;
