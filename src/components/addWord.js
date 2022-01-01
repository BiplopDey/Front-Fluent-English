import React, { Component } from "react";

function AddWord(props) {
  return (
    <div>
      <h1>{props.word}</h1>
      <button type="button" class="btn btn-primary">
        Add
      </button>
    </div>
  );
}

export default AddWord;
