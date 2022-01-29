import { Component } from "react";

import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Search from "./search";
import AddWord from "./addWord";
import Words from "./words";
import { wordsListService } from "../services/wordsListService";
import ErrorMessaje from "./errorMessaje";
import WordList from "./wordList";
import SentenceList from "./sentenceList";

function Favorites() {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [dbWord, setDbWord] = useState(wordsListService);
  const [dbSentence, setDbSentence] = useState(wordsListService);

  useEffect(() => {
    getFavoritesWords();
    getFavoritesSentences();
  }, []);

  function getFavoritesWords() {
    setLoading(true);
    dbWord.fetchFavoritesWords().then(() => {
      setDbWord({ ...dbWord });
      setLoading(false);
    });
  }

  function getFavoritesSentences() {
    setLoading(true);
    dbWord.fetchFavoritesSentences().then(() => {
      setDbSentence({ ...dbSentence });
      setLoading(false);
    });
  }

  return (
    <div>
      <Navbar />
      <Search response={response} setResponse={setResponse} />
      {error && <ErrorMessaje errorResponse={error} />}
      <h2>Words</h2>
      <WordList
        db={dbWord}
        setDb={setDbWord}
        loading={loading}
        setLoading={setLoading}
        wordsList={dbWord.list}
      />
      <h2>Sentences</h2>
      <SentenceList
        db={dbSentence}
        setDb={setDbSentence}
        loading={loading}
        setLoading={setLoading}
        wordsList={dbSentence.list}
      />
    </div>
  );
}

export default Favorites;
