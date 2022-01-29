export default function Search({ response, setResponse }) {
  function updateChange(event) {
    setResponse(event.target.value);
  }

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        autoFocus={true}
        value={response}
        onChange={updateChange}
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
