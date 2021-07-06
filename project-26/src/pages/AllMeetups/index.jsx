import { useEffect, useState } from "react";
import MeetupList from "../../components/MeetupList";

const AllMeetupsPage = () => {
  const [meetups, setMeetups] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://react-http-c71fc-default-rtdb.firebaseio.com/meetups.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const loadedMeetUps = [];

        for (const key in data) {
          loadedMeetUps.push({
            id: key,
            ...data[key],
          });
        }
        setIsLoading(false);
        setMeetups(loadedMeetUps);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

  return (
    <div>
      <h1>MeetUps</h1>
      <MeetupList meetups={meetups} />
    </div>
  );
};

export default AllMeetupsPage;
