import React, { useState, useEffect } from "react";
import "./App.css";
import StarwarsChars from "./components/StarwarsChars";
import axios from "axios";

const App = () => {
  const [star, setStar] = useState({});

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        console.log(res.data.results);
        setStar(res.data.results);
        console.log(star);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  if (star.length > 0) {
    return (
      <div className="App">
        <h1 className="Header"> React Wars</h1>
        <StarwarsChars stars={star} />
      </div>
    );
  } else {
    return null;
  }
};

export default App;

// const [starwarsChars, setStarwarsChars] = useState({});
