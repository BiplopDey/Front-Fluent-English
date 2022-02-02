import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Search from "./search";
import AddWord from "./addWord";
import { wordsListService } from "../services/wordsListService";
import ErrorMessaje from "./errorMessaje";
import SentenceList from "./sentenceList";
import WordList from "./wordList";
import VideoPlayer from "./video/videoPlayer";
import { listCrud } from "../services/listCrud";
import { wordService } from "../services/wordService";

const radioButtonNames = {
  words: "Words",
  phrasalVerb: "Phrasal verbs",
  sentense: "Sentense",
};

export default function Home() {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [db, setDb] = useState(wordsListService);
  let [currentFetching, setCurrentFetching] = useState(radioButtonNames.words);
  const [currentVideo, setCurrentVideo] = useState("");

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
        setLoading(false);
      })
      .catch((errorResponse) => {
        setLoading(false);
        setError(errorResponse);
      });
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
  const matchedWords = db.startsWith(response);

  const list =
    currentFetching == radioButtonNames.sentense ? (
      <SentenceList
        setError={setError}
        db={db}
        wordsList={matchedWords}
        setDb={setDb}
        loading={loading}
        setLoading={setLoading}
      />
    ) : (
      <WordList
        setError={setError}
        db={db}
        wordsList={matchedWords}
        setDb={setDb}
        loading={loading}
        setLoading={setLoading}
      />
    );

  return (
    <>
      <Navbar />
      <VideoPlayer
        currentVideo={currentVideo}
        setCurrentVideo={setCurrentVideo}
      />
      <Search response={response} setResponse={setResponse} />
      {error && <ErrorMessaje errorResponse={error} />}
      {wordService.isYoutubeUrl(response) && (
        <>
          <h1>Wach video</h1>
          <button
            onClick={() => {
              setCurrentVideo(wordService.getYoutubeVideoId(response));
              console.log(wordService.getYoutubeVideoId(response));
            }}
          >
            Wathc
          </button>
        </>
      )}

      {listCrud.empty(matchedWords) && !wordService.isYoutubeUrl(response) && (
        <AddWord name={response} add={addWord} />
      )}

      {!listCrud.empty(matchedWords) && (
        <>
          {radioButtons} {list}
        </>
      )}
    </>
  );
}
