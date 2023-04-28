import React from "react";
import { DateTimePretty } from "../dateTimePretty/DateTimePretty";
import './video.css'

function Video(props) {
    return (
        <div className="video">
            <iframe title='video' src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateTimePretty date={props.date}/>  
        </div>
    )
}

export default Video;