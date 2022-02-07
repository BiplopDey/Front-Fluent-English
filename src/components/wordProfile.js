import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { restApiRepository } from "../repository/restApiRepository";
import { urlList } from "../repository/urlList";
import { wordsListService } from "../services/wordsListService";
import SentenceList from "./sentenceList";

export default function WordProfile() {
  const [loading, setLoading] = useState(false);
  const [db, setDb] = useState(wordsListService);
  const [word, setWord] = useState("");
  let { id } = useParams();

  useEffect(() => {
    db.getById(id).then((data) => {
      setWord({ ...data });
    });
    db.fetchAll(() => {
      setDb({ ...db });
    });
  }, []);

  const sentencesContainedWord = (
    <SentenceList
      db={db}
      setDb={setDb}
      loading={loading}
      setLoading={setLoading}
      wordsList={db.contains(word.name)}
    />
  );

  return (
    <>
      <h1>Name: {word.name}</h1>
      <h2>Transcrip: {word.transcription}</h2>
      <h3>Definition: {word.definition}</h3>
      <h1>Contained Words</h1>
      {sentencesContainedWord}
    </>
  );
}
