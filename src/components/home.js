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

function Home() {
  let [response, setResponse] = useState("");
  const [wordList, setWordList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [db, setDb] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function updateChange(event) {
    response = event.target.value;
    setResponse(response);
    //response could be "", but str.startsWith("") is always true
    setWordList([...WordListing.empiezaCon(db, response)]);
  }

  function updateWord(word) {
    setLoading(true);
    diccionaryApiService.update(word).then((data) => {
      wordList[findIndexById(word.id)] = data;
      setWordList([...wordList]);
      setLoading(false);
    });
  }

  function addWord(word) {
    setLoading(true);
    diccionaryApiService.create(word).then((data) => {
      setWordList([data, ...wordList]);
      setLoading(false);
    });
  }

  function getAll() {
    setLoading(true);
    diccionaryApiService
      .fetchAll()
      .then((data) => {
        console.log("getting data");
        setWordList(data);
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
      wordList.splice(findIndexById(id), 1);
      setWordList([...wordList]);
      setLoading(false);
    });
  }

  const findIndexById = (id) => wordList.findIndex((e) => e.id == id);

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
      <h1>DataBase</h1>
      <Words
        words={db}
        loader={loading}
        deleteWord={deleteWord}
        updateWord={updateWord}
      />
    </div>
  );
}

export default Home;
