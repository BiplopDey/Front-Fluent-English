import React, { useState } from "react";

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
    <div>
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Name
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={wordState.name}
          onChange={updateChangeName}
        />
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Transcription
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={wordState.transcription}
          onChange={updateChangeTrans}
        />
      </div>

      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Definition
          </span>
        </div>
        <input
          type="text"
          className="form-control"
          aria-label="Default"
          aria-describedby="inputGroup-sizing-default"
          value={wordState.definition}
          onChange={updateChangeDef}
        />
      </div>

      <button type="button" className="btn btn-primary" onClick={addWord}>
        Add
      </button>
      <button type="button" className="btn btn-primary" onClick={cancelEditing}>
        Cancel
      </button>
    </div>
  );
}

export default WordForm;
