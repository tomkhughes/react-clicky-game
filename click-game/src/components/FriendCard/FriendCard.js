import React from "react";
import "./FriendCard.css";

const FriendCard = props => (
  <div onClick={() => props.removeFriend(props.id)}>
  <div 
  onClick={() => props.scoreCount(props.id)} 
  className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong>Name:</strong> {props.name}
        </li>
        <li>
          <strong>Occupation:</strong> {props.occupation}
        </li>
        <li>
          <strong>Location:</strong> {props.location}
        </li>
      </ul>
    </div>
  </div>
  </div>
);

export default FriendCard;
// <div onClick={() => props.removeFriend(props.id)} className="card">