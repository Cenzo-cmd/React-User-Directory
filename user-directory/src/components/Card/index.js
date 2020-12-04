import React from "react";

function Card(props) {
    return (
        <div className="card">
            <div className="card-body">
                <h3>{`Name: ${props.employee.name.first} ${props.employee.name.last}`}</h3>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <img src={props.employee.picture.medium}></img>
            </div>
        </div>
    )
}

export default Card;
