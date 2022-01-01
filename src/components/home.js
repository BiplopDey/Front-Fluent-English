import React from "react";
import Navbar from "./navbar";
import Search from "./search";
import AddWord from "./addWord";
import Words from "./words";

function Home() {
  const [state, setState] = React.useState({
    response: "",
    wordList: [new Word("mundo"), new Word("Hola"), new Word("Hello")],
  });

  function Word(name) {
    this.name = name;
  }

  function updateChange(event) {
    setState({
      ...state,
      response: event.target.value,
    });
  }

  function add() {
    setState({
      ...state,
      wordList: [new Word(state.response), ...state.wordList],
    });
  }

  return (
    <div>
      <Navbar />
      <Search response={state.response} onChange={updateChange} />
      <AddWord word={state.response} add={add} />
      <Words words={state.wordList} />
    </div>
  );
}

export default Home;
