import { useContext } from "react";
import { favoritesContext } from "../../store/favoritesContext";
import Card from "../Card";
import styles from "./styles.module.css";
const MeetupItem = ({ image, title, address, description, id }) => {
  const { isFavorite, removeFavorite, addFavorite } =
    useContext(favoritesContext);
  const itemIsFavorite = isFavorite(id);

  const toggleFavoriteStatusHandler = () => {
    if (itemIsFavorite) {
      removeFavorite(id);
    } else {
      addFavorite({
        id,
        image,
        title,
        address,
        description,
      });
    }
  };
  return (
    <li className={styles.item}>
      <Card>
        <img className={styles.image} src={image} alt={title} />
        <div className={styles.content}>
          <h3>{title}</h3>
          <address>{address}</address>
          <p>{description}</p>
        </div>
        <div className={styles.actions}>
          <button onClick={toggleFavoriteStatusHandler}>
            {itemIsFavorite ? "Remove from favorites" : "To favorite"}
          </button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;
