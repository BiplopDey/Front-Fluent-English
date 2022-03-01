import React, { useState } from "react";
import InputText from "./inputText";

function SentenseForm({ sentence, operation, setDisplay }) {
  const [sentenceState, setSentence] = useState({ ...sentence });

  function addWord() {
    operation(sentenceState);
    setDisplay(false);
  }

  function updateChangeName(event) {
    setSentence({
      ...sentenceState,
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
          state={sentenceState.name}
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
