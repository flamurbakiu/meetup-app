import React, { Fragment } from 'react';

import MeetupDetail from '../../components/meetups/MeetupDetail';

function MeetupDetails() {
  return (
    <MeetupDetail
      id='m1'
      image='https://images.jpost.com/image/upload/f_auto,fl_lossy/t_JM_ArticleMainImageFaceDetect/465766'
      title='A First Meetup'
      address='Address 1'
      description='The meetup description'
    />
  );
}

export default MeetupDetails;
