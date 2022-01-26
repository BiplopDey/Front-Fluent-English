import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Search from "./search";
import AddWord from "./addWord";
import { wordsListService } from "../services/wordsListService";
import ErrorMessaje from "./errorMessaje";
import SentenceList from "./sentenceList";
import WordList from "./wordList";
import VideoPlayer from "./video/videoPlayer";

const radioButtonNames = {
  words: "Words",
  phrasalVerb: "Phrasal verbs",
  sentense: "Sentense",
};

function Home() {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [db, setDb] = useState(wordsListService);
  let [currentFetching, setCurrentFetching] = useState(radioButtonNames.words);

  useEffect(() => {
    getAll();
  }, [currentFetching]);

  function setFetch(event) {
    currentFetching = event.target.name;
    setCurrentFetching(currentFetching);
  }

  function fetch() {
    if (currentFetching == radioButtonNames.words) return db.fetchWords(); // returns a promise
    if (currentFetching == radioButtonNames.phrasalVerb)
      return db.fetchPhrasalVerb();
    if (currentFetching == radioButtonNames.sentense) return db.fetchSentence();
  }

  function getAll() {
    setLoading(true);
    fetch()
      .then(() => {
        setDb({ ...db });
        console.log(wordsListService.dicctionaryRepository.url);
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

  const radioButtons = (
    <div className="btn-group" role="group" aria-label="Basic outlined example">
      <button
        type="button"
        name={radioButtonNames.words}
        onClick={setFetch}
        className="btn btn-outline-primary"
      >
        {radioButtonNames.words}
      </button>
      <button
        type="button"
        name={radioButtonNames.phrasalVerb}
        onClick={setFetch}
        className="btn btn-outline-primary"
      >
        {radioButtonNames.phrasalVerb}
      </button>
      <button
        type="button"
        name={radioButtonNames.sentense}
        onClick={setFetch}
        className="btn btn-outline-primary"
      >
        {radioButtonNames.sentense}
      </button>
    </div>
  );

  const list =
    currentFetching == radioButtonNames.sentense ? (
      <SentenceList
        setError={setError}
        db={db}
        wordsList={db.startsWith(response)}
        setDb={setDb}
        loading={loading}
        setLoading={setLoading}
      />
    ) : (
      <WordList
        setError={setError}
        db={db}
        wordsList={db.startsWith(response)}
        setDb={setDb}
        loading={loading}
        setLoading={setLoading}
      />
    );

  return (
    <div>
      <Navbar />
      <VideoPlayer videoUrl="" />
      <Search response={response} onChange={updateChange} />
      <AddWord name={response} add={addWord} />
      {error && <ErrorMessaje errorResponse={error} />}
      {radioButtons}
      {list}
    </div>
  );
}

export default Home;
