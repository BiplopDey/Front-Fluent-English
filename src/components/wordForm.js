import React, { useState } from "react";

function InputText(props) {
  return (
    <div className="input-group mb-3">
      {/* <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroup-sizing-default">
          {props.name}
        </span>
      </div> */}
      <input
        type="text"
        className="form-control"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        value={props.state}
        onChange={props.stateUpdate}
      />
    </div>
  );
}

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

  return (
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
}

export default WordForm;
