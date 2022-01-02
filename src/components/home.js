import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Search from "./search";
import AddWord from "./addWord";
import Words from "./words";
import { diccionaryApiService } from "../services/diccionaryApiService";
import axios from "axios";
const url = diccionaryApiService.myUrl;

function Home() {
  const [response, setResponse] = useState("");
  const [wordList, setWordList] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function updateChange(event) {
    setResponse(event.target.value);
  }

  function update(id, name) {
    const word = { id: id, name: name };
    axios.patch(url + `/${id}`, word).then((res) => {
      wordList[findIndexById(id)] = res.data;
      setWordList([...wordList]);
    });
  }

  function add() {
    axios.post(url, { name: response }).then((res) => {
      setWordList([res.data, ...wordList]);
    });
    getAll();
  }

  function getAll() {
    axios.get(url).then((response) => {
      setWordList(response.data);
    });
  }

  function deleteWord(id) {
    axios.delete(url + `/${id}`).then(() => {
      wordList.splice(id, 1);
      setWordList([...wordList]);
    });
    getAll();
  }

  function findIndexById(id) {
    return wordList.findIndex((e) => e.id == id);
  }

  return (
    <div>
      <Navbar />
      <Search response={response} onChange={updateChange} />
      <AddWord word={response} add={add} />
      <Words words={wordList} delete={deleteWord} update={update} />
    </div>
  );
}

export default Home;
