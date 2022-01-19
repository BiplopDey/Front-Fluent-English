import { Component } from "react";

import React, { useEffect, useState } from "react";
import Navbar from "./navbar";
import Search from "./search";
import AddWord from "./addWord";
import Words from "./words";
import { wordsListService } from "../services/wordsListService";
import ErrorMessaje from "./errorMessaje";

function Favorites() {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [db, setDb] = useState(wordsListService);

  function updateChange(event) {
    setResponse(event.target.value);
  }

  useEffect(() => {
    getFavorites();
  }, []);

  function getFavorites() {
    setLoading(true);
    db.fetchFavorites()
      .then(() => {
        setDb({ ...db });
        setLoading(false);
      })
      .catch((errorResponse) => {
        setLoading(false);
        setError(errorResponse);
      });
  }

  return (
    <div>
      <Navbar />
      <Search response={response} onChange={updateChange} />
      {error && <ErrorMessaje errorResponse={error} />}

      <Words
        setError={setError}
        db={db}
        setDb={setDb}
        wordsList={db}
        loading={loading}
        wordsList={db.startsWith(response)}
        setLoading={setLoading}
      />
    </div>
  );
}

export default Favorites;
