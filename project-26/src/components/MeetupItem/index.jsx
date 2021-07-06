import Card from "../Card";
import styles from "./styles.module.css";
const MeetupItem = ({ image, title, address, description }) => {
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
          <button>To favorite</button>
        </div>
      </Card>
    </li>
  );
};

export default MeetupItem;