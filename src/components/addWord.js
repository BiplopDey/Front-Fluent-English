import React from "react";

function AddWord(props) {
  return (
    <div>
      <h1>{props.word}</h1>
      <button type="button" className="btn btn-primary" onClick={props.add}>
        Add
      </button>
    </div>
  );
}

export default AddWord;
