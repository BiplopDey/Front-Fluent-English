import React from "react";
import Navbar from "./navbar";
import Search from "./search";
import AddWord from "./addWord";
import Words from "./words";

function Home() {
  let id = 0;
  const [state, setState] = React.useState({
    response: "",
    wordList: [new Word("mundo"), new Word("Hola"), new Word("Hello")],
  });

  function Word(name) {
    this.id = id++;
    this.name = name;
  }

  function updateChange(event) {
    setState({
      ...state,
      response: event.target.value,
    });
  }

  function update(id, name) {
    const index = findIndexById(id);
    state.wordList[index].name = name;
    setState({
      ...state,
    });
  }

  function add() {
    setState({
      ...state,
      wordList: [new Word(state.response), ...state.wordList],
    });
  }

  function deleteWord(id) {
    console.log(findIndexById(id));
    state.wordList.splice(findIndexById(id), 1);
    setState({
      ...state,
    });
  }

  function findIndexById(id) {
    return state.wordList.findIndex((e) => e.id == id);
  }

  return (
    <div>
      <Navbar />
      <Search response={state.response} onChange={updateChange} />
      <AddWord word={state.response} add={add} />
      <Words words={state.wordList} delete={deleteWord} update={update} />
    </div>
  );
}

export default Home;
