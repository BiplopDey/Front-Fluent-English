import React, { useState } from "react";
import { wordService } from "../services/wordService";
import SentenseForm from "./sentenseForm";
import WordForm from "./wordForm";

function AddWord({ name, add }) {
  const [isAdding, setIsAdding] = useState(false);

  if (!isAdding) {
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
  const word = { name: name };

  return wordService.isSentence(name) ? (
    <SentenseForm word={word} operation={add} setDisplay={setIsAdding} />
  ) : (
    <WordForm word={word} operation={add} setDisplay={setIsAdding} />
  );
}

export default AddWord;
