import React, { useState } from "react";
import { wordService } from "../services/wordService";
import WordForm from "./wordForm";

function AddWord({ name, add }) {
  const [isAdding, setIsAdding] = useState(false);

  if (isAdding) {
    const word = { name: name };
    //const form = wordService.isSentence(name) ? <WordForm word={word} operation={add} setDisplay={setIsAdding} />
    const form = (
      <WordForm word={word} operation={add} setDisplay={setIsAdding} />
    );
    return (
      <table className="table">
        <thead>
          <tr>
            <th scope="col"></th>
            <th scope="col">Name</th>
            <th scope="col">Transcrip</th>
            <th scope="col">Definition</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {/* <WordForm word={word} operation={add} setDisplay={setIsAdding} /> */}
          {form}
        </tbody>
      </table>
    );
  }

  return (
    <div>
      <h1>{name}</h1>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          setIsAdding(true);
        }}
      >
        <i className="bi bi-plus-square-fill"></i>
      </button>
    </div>
  );
}

export default AddWord;
