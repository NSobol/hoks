import React from 'react'
import moment from 'moment/moment'
import DateTime from '../dateTime/DateTime';

export const DateTimePretty = (props) => {
    require('moment/locale/ru');
     
    let dateLength=moment(props.date).fromNow();

    console.log(dateLength);
  return (
    <div className='timePretty'><DateTime date={dateLength} /></div>
  )
}
