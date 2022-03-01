import React, { useState } from "react";
import SentenseForm from "./sentenseForm";

export default function Sentece({
  sentence,
  update,
  deleteSentence,
  toggleStar,
}) {
  const [isEditing, setIsEditing] = useState(false);

  if (isEditing) {
    return (
      <SentenseForm
        sentence={sentence}
        operation={update}
        setDisplay={setIsEditing}
      />
    );
  }

  return (
    <tr>
      <th scope="row">{sentence.id}</th>
      <td>{sentence.sentence}</td>
      <td>
        <i
          className={sentence.favorite ? "bi bi-star-fill" : "bi bi-star"}
          onClick={() => toggleStar(sentence)}
        ></i>
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
          onClick={() => deleteSentence(sentence)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}
