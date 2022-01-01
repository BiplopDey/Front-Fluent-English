import { Component } from "react";

function Search(props) {
  return (
    <form class="row g-3">
      <div class="col-auto">
        <input
          type="text"
          class="form-control"
          id="inputPassword2"
          placeholder="Search"
          value={props.response}
          onChange={props.onChange}
        />
      </div>
      <div class="col-auto">
        <button type="submit" class="btn btn-primary mb-3">
          Confirm identity
        </button>
      </div>
    </form>
  );
}

export default Search;
