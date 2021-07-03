import { MongoClient } from "mongodb";
import MeetupList from "../components/meetups/MeetupList";

const HomePage = ({ meetups }) => {
  return <MeetupList meetups={meetups} />;
};

// using SSR
// export async function getServerSideProps(context) {
//   const { req, res } = context;
//   // fetch data from API
//   return {
//     props: {
//       meetups: DUMMY_MEETUPS,
//     },
//   };
// }

// using SSG
export async function getStaticProps() {
  // fetch data from API

  const client = await MongoClient.connect("mongodb://172.17.0.1:27017", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  console.log(meetups);
  client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 1,
  };
}

export default HomePage;
