import Word from "./word";
function Words(props) {
  return (
    <ul>
      {props.words.map((word) => (
        <Word
          key={word.id}
          delete={props.delete}
          name={word.name}
          id={word.id}
          update={props.update}
        />
      ))}
    </ul>
  );
}

export default Words;
