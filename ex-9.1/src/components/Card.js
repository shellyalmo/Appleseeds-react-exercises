import React from "react";

const Card = (props) => {
  return (
    <div>
      <ul>
        <li>Name: {props.oldPersonObj.name}</li>
        <li>Birthday: {props.oldPersonObj.birthday}</li>
        <li>
          Favorite meats: {props.oldPersonObj.favoriteFoods.meats.join(", ")}
        </li>
        <li>
          Favorite fish: {props.oldPersonObj.favoriteFoods.fish.join(", ")}
        </li>
      </ul>
    </div>
  );
};

export default Card;
