import { Component } from "react";

function Search(props) {
  const search = (
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
  return search;
  return (
    <form className="row g-3">
      <div className="col-auto">
        <input
          type="text"
          className="form-control"
          placeholder="Search"
          autoFocus={true}
          value={props.response}
          onChange={props.onChange}
        />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default Search;
