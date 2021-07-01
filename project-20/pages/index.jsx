import MeetupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWBjyR556y3eO5lxknx7RChf7DQRIffDZvSqYwdkIfQa6pdT69wvrSfaCwfGJPPbDBqt4&usqp=CAU",
    address: "BC Canada",
    description: "mountains",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWBjyR556y3eO5lxknx7RChf7DQRIffDZvSqYwdkIfQa6pdT69wvrSfaCwfGJPPbDBqt4&usqp=CAU",
    address: "BC Canada",
    description: "most mountains",
  },
];
const HomePage = () => {
  return <MeetupList meetups={DUMMY_MEETUPS} />;
};

export default HomePage;
