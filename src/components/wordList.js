import Loader from "./loader";
import Word from "./word";
import React, { useEffect, useState } from "react";
import { wordsListService } from "../services/wordsListService";
import Sentece from "./sentence";

function WordList({ db, setDb, wordsList, loading, setLoading }) {
  function updateWord(word) {
    setLoading(true);
    db.update(word).then(() => {
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

  function toggleStar(word) {
    setLoading(true);
    db.toggleStar(word).then(() => {
      setDb({ ...db });
      setLoading(false);
    });
  }

  if (loading) return <Loader />;

  if (db.isEmpty())
    return (
      <ul>
        <li>No data</li>
      </ul>
    );

  return (
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Word</th>
          <th scope="col">Transcrition</th>
          <th scope="col">Definition</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {wordsList.map((word) => (
          <Word
            key={word.id}
            deleteWord={deleteWord}
            toggleStar={toggleStar}
            word={word}
            updateWord={updateWord}
          />
        ))}
      </tbody>
    </table>
  );
}

export default WordList;
