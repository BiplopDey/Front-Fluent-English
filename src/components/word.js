function Word(props) {
  return (
    <li>
      <h1>Name: {props.name}</h1>
      <h3>id: {props.id}</h3>
      <h3>Transcript: </h3>
      <h2>Definition: </h2>
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={() => props.delete(props.id)}
      >
        Delete
      </button>
    </li>
  );
}

export default Word;
