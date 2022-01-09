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

  const table = (
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">First</th>
          <th scope="col">Last</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
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
