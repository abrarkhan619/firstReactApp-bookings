import React from 'react'
import Star5 from '../images/5star.png'

export default function Card(props) {
    return (
        <div>
            <img src={props.source} alt="profile" className="roomPictures"/>
            <img src={Star5} alt="review stars" className="starsReview"/>
            <p>{props.review}</p>
        </div>
    )
}
