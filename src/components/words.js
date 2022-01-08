import Loader from "./loader";
import Word from "./word";

function Words({ words, loader, deleteWord, updateWord }) {
  if (loader) return <Loader />;

  if (words.length === 0)
    return (
      <ul>
        <li>No data</li>
      </ul>
    );

  return (
    <ul>
      {words.map((word) => (
        <Word
          key={word.id}
          deleteWord={deleteWord}
          word={word}
          updateWord={updateWord}
        />
      ))}
    </ul>
  );
}

export default Words;
