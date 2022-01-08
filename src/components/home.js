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
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getAll();
  }, []);

  function updateChange(event) {
    setResponse(event.target.value);
  }

  function update(id, name) {
    setLoading(true);
    const word = { id: id, name: name };
    axios.patch(url + `/${id}`, word).then((res) => {
      wordList[findIndexById(id)] = res.data;
      setWordList([...wordList]);
      setLoading(false);
    });
  }

  function add() {
    setLoading(true);
    diccionaryApiService.create({ name: response }).then((data) => {
      setWordList([data, ...wordList]);
      setLoading(false);
    });
  }

  function getAll() {
    setLoading(true);
    diccionaryApiService.fetchAll().then((data) => {
      setWordList(data);
      setLoading(false);
    });
  }

  function deleteWord(id) {
    axios.delete(url + `/${id}`).then(() => {
      wordList.splice(findIndexById(id), 1);
      setWordList([...wordList]);
    });
  }

  const findIndexById = (id) => wordList.findIndex((e) => e.id == id);

  return (
    <div>
      <Navbar />
      <Search response={response} onChange={updateChange} />
      <AddWord word={response} add={add} />
      {loading && <h1>Is loading</h1>}
      {wordList.length > 0 && (
        <Words words={wordList} delete={deleteWord} update={update} />
      )}
    </div>
  );
}

export default Home;
