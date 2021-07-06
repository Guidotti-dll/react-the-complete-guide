import styles from "./styles.module.css";
const MeetupItem = ({ image, title, address, description }) => {
  return (
    <li className={styles.item}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <address>{address}</address>
        <p>{description}</p>
      </div>
      <div className={styles.actions}>
        <button>To favorite</button>
      </div>
    </li>
  );
};

export default MeetupItem;
