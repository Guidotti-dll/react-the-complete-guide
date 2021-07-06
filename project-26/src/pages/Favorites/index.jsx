import { useContext } from "react";
import { favoritesContext } from "../../store/favoritesContext";
import MeetupList from "../../components/MeetupList";

const FavoritesPage = () => {
  const { favorites, totalFavorites } = useContext(favoritesContext);

  let content = <p>You got no favorites yet. Start adding some?</p>;

  if (totalFavorites > 0) {
    content = <MeetupList meetups={favorites} />;
  }

  return (
    <div>
      <h1>My favorites</h1>
      {content}
    </div>
  );
};

export default FavoritesPage;
