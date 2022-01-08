import React, { useState } from "react";

function AddWordForm({ name, add, setIsAdding }) {
  const [word, setWord] = useState({
    name: name,
    transcription: "",
    definition: "",
  });

  function addWord() {
    add(word);
    setIsAdding(false);
  }

  function updateChangeName(event) {
    setWord({
      ...word,
      name: event.target.value,
    });
  }

  function updateChangeTrans(event) {
    setWord({
      ...word,
      transcription: event.target.value,
    });
  }

  function updateChangeDef(event) {
    setWord({
      ...word,
      definition: event.target.value,
    });
  }

  function cancelEditing() {
    setIsAdding(false);
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
          value={word.name}
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
          value={word.transcription}
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
          value={word.definition}
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

export default AddWordForm;
