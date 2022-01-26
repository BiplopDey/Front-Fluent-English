import React, { useState } from "react";
import InputText from "./inputText";

function SentenseForm({ word, operation, setDisplay }) {
  const [wordState, setWord] = useState({ ...word });

  function addWord() {
    operation(wordState);
    setDisplay(false);
  }

  function updateChangeName(event) {
    setWord({
      ...wordState,
      name: event.target.value,
    });
  }

  function cancelEditing() {
    setDisplay(false);
  }

  const body = (
    <tr>
      <th scope="row"></th>
      <td>
        <InputText
          name="Name"
          state={wordState.name}
          stateUpdate={updateChangeName}
        />
      </td>
      <td>
        <button type="button" className="btn btn-primary" onClick={addWord}>
          Add
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={cancelEditing}
        >
          Cancel
        </button>
      </td>
    </tr>
  );

  const table = (
    <table className="table">
      <thead>
        <tr>
          <th scope="col"></th>
          <th scope="col">Name</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  );

  return table;
}

export default SentenseForm;
