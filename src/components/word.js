import React, { useState } from "react";

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

  const editing = (
    <li>
      <input
        type="text"
        className="form-control"
        value={wordState.name}
        onChange={updateChange}
      />
      <h3>Transcript: </h3>
      <h2>Definition: </h2>
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
        onClick={update}
      >
        Update
      </button>
    </li>
  );

  const looking = (
    <li>
      <h1>Name: {word.name}</h1>
      <h3>id: {word.id}</h3>
      <h3>Transcript: </h3>
      <h2>Definition: </h2>
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

  return isEditing ? editing : looking;
}

export default Word;
