import { Component } from "react";

function Search(props) {
  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        autoFocus={true}
        value={props.response}
        onChange={props.onChange}
        aria-label="Search"
        aria-describedby="search-word"
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" type="button">
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
