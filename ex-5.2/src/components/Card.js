import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className={props.className}>
      <img src={props.Img} alt="" />
      <h1>{props.Title}</h1>
      <p>{props.Desc}</p>
      <a href={props.Link1}>Share</a>
      <a href={props.Link2}>Explore</a>
    </div>
  );
};

export default Card;
