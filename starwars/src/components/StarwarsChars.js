import React from "react";
import Char from "./Char";
import "./StarWars.css";

const StarwarsChars = props => {
  console.log(props.stars[0]);
  return (
    <div className="chars-wrapper">
      {props.stars.map(char => (
        <Char key={char.name} char={char} />
      ))}
    </div>
  );
};

export default StarwarsChars;
