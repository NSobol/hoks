import React from "react";
import './wrapper.css'

function Wrapper(Component) {
	return (props) => {
		const { views, type, ...rest } = props;
		return <Component views={views} type={type } {...rest}/>
	 }
};

export default Wrapper;