import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div>
      <div className="Card">
        <img src={props.image} alt="" />
        <h1>{props.user}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eligendi
          deserunt quo praesentium at ex accusantium labore rerum corporis
          quibusdam recusandae. Repellat.
        </p>
        <button>View Profile</button>
      </div>
    </div>
  );
};

export default Card;
