import Loader from "./loader";
import React, { useEffect, useState } from "react";
import Sentece from "./sentence";
import { listCrud } from "../services/listCrud";
import ErrorMessaje from "./errorMessaje";
import useFetchData from "../hooks/useFetchData";

export default function SentenceList({ sentenceService, list }) {
  let [fetchResponse, error, loading, setPromise] = useFetchData(null);

  function deleteSentence(sentence) {
    setPromise(sentenceService.deleteById(sentence));
    listCrud.delete(list, sentence);
  }

  function update(sentence) {
    setPromise(sentenceService.update(sentence));
    listCrud.update(list, sentence);
  }

  function toggleStar(sentence) {
    setPromise(sentenceService.toggleStar(sentence));
    listCrud.update(list, sentence);
  }

  if (loading) return <Loader />;
  if (error) return <ErrorMessaje error={error} />;

  if (listCrud.empty(list))
    return (
      <ul>
        <li>No data</li>
      </ul>
    );

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {list.map((sentence) => (
          <Sentece
            key={sentence.id}
            deleteSentence={deleteSentence}
            toggleStar={toggleStar}
            sentence={sentence}
            update={update}
          />
        ))}
      </tbody>
    </table>
  );
}
