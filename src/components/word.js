import React, { useState } from "react";

function Word(props) {
  const [isEditing, isEditingState] = useState(false);
  const [wordUpdate, wordState] = useState({ name: props.name });

  function update() {
    isEditingState(false);
    props.update(props.id, wordUpdate.name);
  }

  function updateChange(event) {
    wordState({
      ...wordUpdate,
      name: event.target.value,
    });
  }

  const editing = (
    <li>
      <input
        type="text"
        className="form-control"
        value={wordUpdate.name}
        onChange={updateChange}
      />
      <h3>Transcript: </h3>
      <h2>Definition: </h2>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={() => props.delete(props.id)}
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
      <h1>Name: {props.name}</h1>
      <h3>id: {props.id}</h3>
      <h3>Transcript: </h3>
      <h2>Definition: </h2>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={() => props.delete(props.id)}
      >
        Delete
      </button>
      <button
        type="button"
        className="btn btn-secondary btn-sm"
        onClick={() => {
          isEditingState(true);
        }}
      >
        Edit
      </button>
    </li>
  );

  return isEditing ? editing : looking;
}

export default Word;
