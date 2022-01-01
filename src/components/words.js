import Word from "./word";
function Words(props) {
  return (
    <ul>
      {props.words.map((word, index) => {
        return <Word name={word.name} />;
      })}
    </ul>
  );
}

export default Words;
