import MeetupDetail from "../../components/meetups/MeetupDetail";
const MeetupDetails = ({
  meetup: { image, title, address, description, id },
}) => {
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
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data from API

  const { meetupId } = context.params;
  console.log(meetupId);

  return {
    props: {
      meetup: {
        id: meetupId,
        image:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWBjyR556y3eO5lxknx7RChf7DQRIffDZvSqYwdkIfQa6pdT69wvrSfaCwfGJPPbDBqt4&usqp=CAU",
        title: "Mountains",
        address: "BC, canada",
        description: "a great mountain",
      },
    },
    revalidate: 10,
  };
}

export default MeetupDetails;
