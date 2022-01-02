import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Search from "./search";
import AddWord from "./addWord";
import Words from "./words";
import { diccionaryApiService } from "../services/diccionaryApiService";
import axios from "axios";
const url = diccionaryApiService.myUrl;
function Home() {
  const [state, setState] = useState({
    response: "",
    wordList: [],
  });

  useEffect(() => {
    getAll();
  });

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
    axios.post(url, { name: state.response }).then((res) => {
      state.wordList.unshift(res.data);
      setState({
        ...state,
      });
    });
    getAll();
  }

  function getAll() {
    axios.get(url).then((response) => {
      setState({ ...state, wordList: response.data });
    });
  }

  function deleteWord(id) {
    axios.delete(url + `/${id}`).then(() => {
      state.wordList.splice(id, 1);
      setState({
        ...state,
      });
    });
    //diccionaryApiService.deleteById(id);
    getAll();
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
