import React from 'react'
import moment from 'moment/moment'
import DateTime from '../dateTime/DateTime';

const WithDateTimePretty = (Component) => {
	return function wrapped (props) {
		require('moment/locale/ru');
		let dateLength = moment(props.date).fromNow();
		return <Component {...props} date={dateLength}/>
	}
}

export const DateTimePretty = WithDateTimePretty(DateTime)
