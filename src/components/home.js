import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Search from "./search";
import AddWord from "./addWord";
import Words from "./words";
import { diccionaryApiService } from "../services/diccionaryApiService";
import { wordsListService } from "../services/wordsListService";
import ErrorMessaje from "./errorMessaje";

function Home() {
  let [response, setResponse] = useState("");
  const [wordList, setWordList] = useState(wordsListService);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [db, setDb] = useState(wordsListService);

  useEffect(() => {
    getAll();
  }, []);

  useEffect(() => {
    wordList.addAll([...db.startsWith(response)]);
    setWordList({ ...wordList });
  }, [db, response]);

  function updateChange(event) {
    setResponse(event.target.value);
  }

  function updateWord(word) {
    setLoading(true);
    db.update(word).then(() => {
      setDb({ ...db });
      setLoading(false);
    });
  }

  function addWord(word) {
    setLoading(true);
    db.add(word).then(() => {
      setDb({ ...db });
      setLoading(false);
    });
  }

  function deleteWord(word) {
    setLoading(true);
    db.delete(word).then(() => {
      setDb({ ...db });
      setLoading(false);
    });
  }

  function getAll() {
    setLoading(true);
    db.fetchAll()
      .then(() => {
        setDb({ ...db });
        setLoading(false);
      })
      .catch((errorResponse) => {
        setLoading(false);
        setError(errorResponse);
      });
  }

  return (
    <div>
      <Navbar />
      <Search response={response} onChange={updateChange} />
      <AddWord name={response} add={addWord} />
      {error && <ErrorMessaje errorResponse={error} />}

      <Words
        words={wordList.list}
        loader={loading}
        deleteWord={deleteWord}
        updateWord={updateWord}
      />
    </div>
  );
}

export default Home;
