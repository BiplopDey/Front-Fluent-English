import React from "react";
import Navbar from "./navbar";
import Search from "./search";
import addWord from "./addWord";

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
      <addWord word={state.response} />
    </div>
  );
}

export default Home;
