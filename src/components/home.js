import React, { Component } from "react";
import Card from "./card";
import Cards from "./cards";
import Navbar from "./navbar";
import data from "../assets/data/cards.json";
import Search from "./search";

function Home() {
  const [state, setState] = React.useState({
    response: "",
  });

  function updateChange(event) {
    setState({
      ...state,
      response: event.target.value,
    });
  }

  return (
    <div>
      <Navbar />
      <Search response={state.response} onChange={updateChange} />
      <h1>{state.response}</h1>
    </div>
  );
}

export default Home;
