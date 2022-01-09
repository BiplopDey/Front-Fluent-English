import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Search from "./search";
import AddWord from "./addWord";
import Words from "./words";
import { diccionaryApiService } from "../services/diccionaryApiService";
import axios from "axios";
import Loader from "./loader";
import ErrorMesaje from "./errorMessaje";
import { WordListing } from "../services/wordListing";
import { WordsList } from "../services/WordsList";

function Home() {
  let [response, setResponse] = useState("");
  const [wordList, setWordList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [db, setDb] = useState([]);
  const [w, setWords] = useState(new WordsList([]));

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    setWordList([...WordListing.startsWith(db, response)]);
  }, [db, response]);

  function updateChange(event) {
    //  response = event.target.value;
    setResponse(event.target.value);
  }

  function updateWord(word) {
    setLoading(true);
    diccionaryApiService.update(word).then((data) => {
      const index = findIndexById(db, word.id);
      db[index] = data;
      setDb([...db]);
      setLoading(false);
    });
  }

  function addWord(word) {
    setLoading(true);
    diccionaryApiService.create(word).then((data) => {
      setDb([data, ...db]);
      setLoading(false);
    });
  }

  function getAll() {
    setLoading(true);
    diccionaryApiService
      .fetchAll()
      .then((data) => {
        setDb([...data]);
        setLoading(false);
      })
      .catch((errorResponse) => {
        setLoading(false);
        setError(errorResponse);
      });
  }

  function deleteWord(word) {
    const id = word.id;
    setLoading(true);
    diccionaryApiService.deleteById(id).then((id) => {
      const index = findIndexById(db, id);
      db.splice(index, 1);
      setDb([...db]);
      setLoading(false);
    });
  }

  const findIndexById = (list, id) => list.findIndex((e) => e.id == id);

  return (
    <div>
      <Navbar />
      <Search response={response} onChange={updateChange} />
      <AddWord name={response} add={addWord} />
      {error && <ErrorMesaje errorResponse={error} />}
      <Words
        words={wordList}
        loader={loading}
        deleteWord={deleteWord}
        updateWord={updateWord}
      />
      {/* <h1>DataBase</h1>
      <Words
        words={db}
        loader={loading}
        deleteWord={deleteWord}
        updateWord={updateWord}
      /> */}
    </div>
  );
}

export default Home;
