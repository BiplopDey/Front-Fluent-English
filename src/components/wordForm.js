import React, { useState } from "react";
import InputText from "./inputText";

function WordForm({ word, operation, setDisplay }) {
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

  function updateChangeTrans(event) {
    setWord({
      ...wordState,
      transcription: event.target.value,
    });
  }

  function updateChangeDef(event) {
    setWord({
      ...wordState,
      definition: event.target.value,
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
        <InputText
          name="Transcription"
          state={wordState.transcription}
          stateUpdate={updateChangeTrans}
        />
      </td>
      <td>
        <InputText
          name="Definition"
          state={wordState.definition}
          stateUpdate={updateChangeDef}
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
          <th scope="col">Transcrip</th>
          <th scope="col">Definition</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>{body}</tbody>
    </table>
  );
  return table;
}

export default WordForm;
