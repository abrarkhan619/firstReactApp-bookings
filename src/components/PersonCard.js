import React from 'react'

export default function PersonCard(props) {
    return (
        <div className="personCard">
            <img src={props.source} alt="room" className="profilePicture"/>
            <div className="personCardText">
                <h2 className="personName text">{props.name}</h2>
                <h3 className="personCountry text">{props.country}</h3>
            </div>
        </div>
    )
}
