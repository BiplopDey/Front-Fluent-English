import React, { useState } from "react";
import WordForm from "./wordForm";

function Word({ word, updateWord, deleteWord }) {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <WordForm word={word} operation={updateWord} setDisplay={setIsEditing} />
    );
  }
  const row = (
    <tr>
      <th scope="row">{word.id}</th>
      <td>{word.name}</td>
      <td>{word.transcription}</td>
      <td>{word.definition}</td>
      <td>
        <button
          type="button"
          className="btn btn-secondary btn-sm"
          onClick={() => {
            setIsEditing(true);
          }}
        >
          Edit
        </button>

        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={() => deleteWord(word)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
  return row;
}

export default Word;
