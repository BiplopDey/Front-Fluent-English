import React, { useState } from "react";
import AddWordForm from "./addWordForm";

function AddWord({ name, add }) {
  const [isAdding, setIsAdding] = useState(false);

  if (isAdding) {
    return <AddWordForm name={name} add={add} setIsAdding={setIsAdding} />;
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
