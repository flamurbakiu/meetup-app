import React from 'react';
import { useRouter } from 'next/router';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails(props) {
  const router = useRouter();

  console.log(router.query.meetupId);

  return (
    <MeetupDetail
      id={props.meetupData.id}
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: 'm1',
        },
      },
      {
        params: {
          meetupId: 'm2',
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data

  const meetupId = context.params.meetupId;

  console.log(meetupId);

  return {
    props: {
      meetupData: {
        id: meetupId,
        image:
          'https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JM_ArticleMainImageFaceDetect/465766',
        title: 'A First Meetup',
        address: 'Address 1',
        description: 'The meetup description',
      },
    },
  };
}

export default MeetupDetails;
