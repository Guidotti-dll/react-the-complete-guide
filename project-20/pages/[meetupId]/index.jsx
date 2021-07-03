import { MongoClient, ObjectID } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetails = ({ meetup: { image, title, address, description } }) => {
  return (
    <MeetupDetail
      image={image}
      title={title}
      address={address}
      description={description}
    />
  );
};

export async function getStaticPaths() {
  const client = await MongoClient.connect("mongodb://172.17.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find({}, { _id: 1 }).toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: {
        meetupId: meetup._id.toString(),
      },
    })),
  };
}

export async function getStaticProps(context) {
  // fetch data from API

  const { meetupId } = context.params;
  const client = await MongoClient.connect("mongodb://172.17.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const selectedMeetup = await meetupsCollection.findOne({
    _id: ObjectID(meetupId),
  });
  client.close();

  return {
    props: {
      meetup: {
        id: selectedMeetup._id.toString(),
        title: selectedMeetup.title,
        address: selectedMeetup.address,
        description: selectedMeetup.description,
        image: selectedMeetup.image,
      },
    },
    revalidate: 10,
  };
}

export default MeetupDetails;
