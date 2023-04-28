import React from "react";
import './wrapper.css'

function Wrapper(props) {
    return (
        <div className="wrap-item wrap-item-wrapper">
            {props.children}
        </div>
    )
};

export default Wrapper;