import React from "react";
import { observer, inject } from "mobx-react";
import ListWrapper from "../../components/ListWrapper";
import FavoriteList from "../../components/FavoriteList";

const FavoritesListContainer = inject(({ rootStore }) => {
  return {
    favoritesStore: rootStore.favoritesStore
  };
})(
  observer(({ favoritesStore }) => {
    return (
      <ListWrapper title="Favorites">
        <FavoriteList
          favEvents={favoritesStore.getEvents()}
          loading={favoritesStore.isFavoritesLoading}
        />
      </ListWrapper>
    );
  })
);

export default FavoritesListContainer;
