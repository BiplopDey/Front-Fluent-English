import React, { useState } from "react";
import WordForm from "./wordForm";

function AddWord({ name, add }) {
  const [isAdding, setIsAdding] = useState(false);

  if (isAdding) {
    const word = { name: name };
    return <WordForm word={word} operation={add} setDisplay={setIsAdding} />;
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
        <i class="bi bi-plus-square-fill"></i>
      </button>
    </div>
  );
}

export default AddWord;
