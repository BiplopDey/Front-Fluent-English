import React, { useState } from "react";
import WordForm from "./wordForm";

function Word({ word, updateWord, deleteWord }) {
  const [isEditing, setIsEditing] = useState(false);
  const [wordState, setWord] = useState({ ...word });

  function update() {
    setIsEditing(false);
    updateWord(wordState);
  }

  function updateChange(event) {
    setWord({
      ...wordState,
      name: event.target.value,
    });
  }

  if (isEditing) {
    return (
      <WordForm word={word} operation={updateWord} setDisplay={setIsEditing} />
    );
  }

  const looking = (
    <li>
      <h1>Name: {word.name}</h1>
      <h3>id: {word.id}</h3>
      <h3>Transcript: {word.transcription} </h3>
      <h2>Definition: {word.definition} </h2>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={() => deleteWord(wordState)}
      >
        Delete
      </button>
      <button
        type="button"
        className="btn btn-secondary btn-sm"
        onClick={() => {
          setIsEditing(true);
        }}
      >
        Edit
      </button>
    </li>
  );

  return looking;
}

export default Word;
