import React from "react";

function InputText({ state, stateUpdate }) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
        value={state}
        onChange={stateUpdate}
      />
    </div>
  );
}

export default InputText;
