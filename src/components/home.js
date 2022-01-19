import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Search from "./search";
import AddWord from "./addWord";
import Words from "./words";
import { wordsListService } from "../services/wordsListService";
import ErrorMessaje from "./errorMessaje";

function Home() {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [db, setDb] = useState(wordsListService);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    setLoading(true);
    db.fetchAll()
      .then(() => {
        setDb({ ...db });
        setLoading(false);
      })
      .catch((errorResponse) => {
        setLoading(false);
        setError(errorResponse);
      });
  }
  function updateChange(event) {
    setResponse(event.target.value);
  }

  function addWord(word) {
    setLoading(true);
    db.add(word).then(() => {
      setDb({ ...db });
      setLoading(false);
    });
  }

  return (
    <div>
      <Navbar />
      <Search response={response} onChange={updateChange} />
      <AddWord name={response} add={addWord} />
      {error && <ErrorMessaje errorResponse={error} />}

      <Words
        setError={setError}
        db={db}
        wordsList={db.startsWith(response)}
        setDb={setDb}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
}

export default Home;
