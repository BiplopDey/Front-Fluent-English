import Word from "./word";
function Words(props) {
  return (
    <ul>
      {props.words.map((word) => {
        return (
          <Word
            key={word.id}
            delete={props.delete}
            name={word.name}
            id={word.id}
          />
        );
      })}
    </ul>
  );
}

export default Words;
