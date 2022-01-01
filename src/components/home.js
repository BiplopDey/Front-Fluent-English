import React from "react";
import Navbar from "./navbar";
import Search from "./search";
import AddWord from "./addWord";
import Words from "./words";

function Home() {
  const [state, setState] = React.useState({
    response: "",
    wordList: ["Hello", "world", "hola", "mundo"],
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
      <AddWord word={state.response} />
      <Words words={state.wordList} />
    </div>
  );
}

export default Home;
