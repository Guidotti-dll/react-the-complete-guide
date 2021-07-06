import styles from "./styles.module.css";
import MeetupItem from "../MeetupItem";
const MeetupList = ({ meetups }) => {
  return (
    <ul className={styles.list}>
      {meetups.map((meetup) => (
        <MeetupItem
          key={meetup.id}
          title={meetup.title}
          image={meetup.image}
          address={meetup.address}
          description={meetup.description}
        />
      ))}
    </ul>
  );
};

export default MeetupList;
