import { createContext, useState } from "react";

export const favoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (meetup) => {},
  removeFavorite: (id) => {},
  isFavorite: (id) => {},
});

const FavoritesContextProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(
    JSON.parse(localStorage.getItem("favorites")) || []
  );

  const addFavoriteHandler = (meetup) => {
    const updatedFavorites = [...favorites, meetup];
    setFavorites(updatedFavorites);
    updateStore(updatedFavorites);
  };
  const removeFavoriteHandler = (id) => {
    const updatedFavorites = favorites.filter((meetup) => meetup.id !== id);
    setFavorites(updatedFavorites);
    updateStore(updatedFavorites);
  };
  const isFavoriteHandler = (id) => {
    return favorites.some((meetup) => meetup.id === id);
  };

  const updateStore = (favorites) => {
    localStorage.clear();
    localStorage.setItem("favorites", JSON.stringify(favorites));
  };

  return (
    <favoritesContext.Provider
      value={{
        favorites,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        isFavorite: isFavoriteHandler,
        totalFavorites: favorites.length,
      }}
    >
      {children}
    </favoritesContext.Provider>
  );
};

export default FavoritesContextProvider;
