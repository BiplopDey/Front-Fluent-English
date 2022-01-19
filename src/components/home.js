import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Search from "./search";
import AddWord from "./addWord";
import Words from "./words";
import { wordsListService } from "../services/wordsListService";
import ErrorMessaje from "./errorMessaje";
const radioButton = {
  words: "Words",
  phrasalVerb: "Phrasal verbs",
  sentense: "Sentense",
};
function Home() {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [db, setDb] = useState(wordsListService);
  const [currentFetching, setCurrentFetching] = useState(radioButton.words);
  useEffect(() => {
    getAll();
  }, [currentFetching]);

  function setFetch(event) {
    setCurrentFetching(event.target.name);
    console.log(currentFetching);
  }

  function fetch() {
    if (currentFetching == radioButton.words) return db.fetchAll(); // returns a promise
    if (currentFetching == radioButton.phrasalVerb)
      return db.fetchPhrasalVerb();
    if (currentFetching == radioButton.sentense) return db.fetchSentence();
  }

  function getAll() {
    setLoading(true);
    fetch()
      .then(() => {
        setDb({ ...db });
        setLoading(false);
      })
      .catch((errorResponse) => {
        setLoading(false);
        setError(errorResponse);
      });
  }
  function updateChange(event) {
    setResponse(event.target.value);
  }

  function addWord(word) {
    setLoading(true);
    db.add(word).then(() => {
      setDb({ ...db });
      setLoading(false);
    });
  }

  return (
    <div>
      <Navbar />
      <Search response={response} onChange={updateChange} />
      <AddWord name={response} add={addWord} />
      {error && <ErrorMessaje errorResponse={error} />}
      <div
        className="btn-group"
        role="group"
        aria-label="Basic outlined example"
      >
        <button
          type="button"
          name={radioButton.words}
          onClick={setFetch}
          className="btn btn-outline-primary"
        >
          {radioButton.words}
        </button>
        <button
          type="button"
          name={radioButton.phrasalVerb}
          onClick={setFetch}
          className="btn btn-outline-primary"
        >
          {radioButton.phrasalVerb}
        </button>
        <button
          type="button"
          name={radioButton.sentense}
          onClick={setFetch}
          className="btn btn-outline-primary"
        >
          {radioButton.sentense}
        </button>
      </div>
      <Words
        setError={setError}
        db={db}
        wordsList={db.startsWith(response)}
        setDb={setDb}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}

export default Home;
