import React, { useState } from "react";
import Navbar from "./navbar";
import Search from "./search";
import AddWord from "./addWord";
import Words from "./words";
import { diccionaryApiService } from "../services/diccionaryApiService";
function Home() {
  const initialWords = [
    {
      id: 0,
      name: "hello",
    },
    {
      id: 1,
      name: "Word",
    },
  ];

  const [id, updateId] = useState(2);
  const [state, setState] = useState({
    response: "",
    wordList: initialWords,
  });

  function Word(name) {
    updateId(id + 1);
    this.id = id;
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
    let newWord = new Word(state.response);
    diccionaryApiService.create({ name: newWord.name });
    state.wordList.unshift(newWord);
    setState({
      ...state,
    });
  }

  function deleteWord(id) {
    //console.log(findIndexById(id));
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
