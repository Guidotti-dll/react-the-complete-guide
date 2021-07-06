import NewMeetupForm from "../../components/NewMeetupForm";
import { useHistory } from "react-router-dom";
const NewMeetupPage = () => {
  const { replace } = useHistory();

  const addMeetupHandler = (meetup) => {
    fetch("https://react-http-c71fc-default-rtdb.firebaseio.com/meetups.json", {
      method: "POST",
      body: JSON.stringify(meetup),
      headers: {
        "Content-Type": "application/json",
      },
    }).then(() => {
      replace("/");
    });
  };

  return (
    <section>
      <h1>Add New Meetups</h1>
      <NewMeetupForm onAddNewMeetup={addMeetupHandler} />
    </section>
  );
};

export default NewMeetupPage;
