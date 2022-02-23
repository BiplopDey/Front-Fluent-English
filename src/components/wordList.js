import Loader from "./loader";
import Word from "./word";
import React, { useEffect, useState } from "react";
import { listCrud } from "../services/listCrud";
import useFetchData from "../hooks/useFetchData";
import ErrorMessaje from "./errorMessaje";

export default function WordList({ service, list }) {
  let [fetchResponse, error, loading, setPromise] = useFetchData(null);

  function deleteWord(word) {
    setPromise(service.deleteById(word));
    listCrud.delete(list, word);
  }

  function updateWord(word) {
    setPromise(service.update(word));
    listCrud.update(list, word);
  }

  function toggleStar(word) {
    setPromise(service.toggleStar(word));
    listCrud.update(list, word);
  }

  if (loading) return <Loader />;
  if (error) return <ErrorMessaje />;

  if (listCrud.empty(list))
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
        {list.map((word) => (
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
