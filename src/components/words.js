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
    <table className="table table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Word</th>
          <th scope="col">Transcrition</th>
          <th scope="col">Definition</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {words.map((word) => (
          <Word
            key={word.id}
            deleteWord={deleteWord}
            word={word}
            updateWord={updateWord}
          />
        ))}
      </tbody>
    </table>
  );

  return (
    <ul className="list-group">
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
