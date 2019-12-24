import React from "react";
import { observer, inject } from "mobx-react";
import FavoriteList from "./../../components/FavoriteList/index";

const FavoritesContainer = inject(({ rootStore }) => {
  return {
    eventsStore: rootStore.eventsStore
  };
})(
  observer(({ eventsStore }) => {
    return <FavoriteList favEvents={eventsStore.favEvents} />;
  })
);

FavoritesContainer.displayName = "FavoritesContainer";
export default FavoritesContainer;
