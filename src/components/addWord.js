import React, { useState } from "react";
import WordForm from "./wordForm";

function AddWord({ name, add }) {
  const [isAdding, setIsAdding] = useState(false);

  if (isAdding) {
    const word = { name: name };
    return (
      <table class="table">
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
          <WordForm word={word} operation={add} setDisplay={setIsAdding} />
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
