import { Component } from "react";

function Search(props) {
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
