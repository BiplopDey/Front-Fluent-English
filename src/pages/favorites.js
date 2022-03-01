import { Component } from "react";

import React, { useEffect, useState } from "react";
import Navbar from "../components/navbar";
import Search from "../components/search";
import { wordsListService } from "../services/wordsListService";
import ErrorMessaje from "../components/errorMessaje";
import WordList from "../components/wordList";
import SentenceList from "../components/sentenceList";
import WordService from "../services/wordService";
import wordApiRepository from "../repository/wordApiRepository";
import useFetchData from "../hooks/useFetchData";
import { listCrud } from "../services/listCrud";
import Loader from "../components/loader";
import sentenceApiRepository from "../repository/sentenceApiRepository";
import SentenceService from "../services/sentenceService";

function Favorites() {
  const [response, setResponse] = useState("");
  const wordService = new WordService(new wordApiRepository());
  const sentenceService = new SentenceService(new sentenceApiRepository());
  let [sentenceList, errorSentence, loadingSentence] = useFetchData(
    sentenceService.all()
  );
  let [wordsList, error, loading] = useFetchData(wordService.all());

  if (loading || loadingSentence) return <Loader />;
  if (error) return <ErrorMessaje />;

  return (
    <div>
      <Navbar />
      <Search response={response} setResponse={setResponse} />
      {error && <ErrorMessaje errorResponse={error} />}
      <h2>Words</h2>
      <WordList
        wordService={wordService}
        list={listCrud.wordListstartsWith(wordsList, response)}
      />
      <h2>Sentences</h2>
      <SentenceList
        sentenceService={sentenceService}
        list={listCrud.sentenceListStartsWith(sentenceList, response)}
      />
    </div>
  );
}

export default Favorites;
