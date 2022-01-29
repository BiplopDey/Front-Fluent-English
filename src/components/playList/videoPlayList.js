import React, { useEffect, useState } from "react";
import { playListService } from "../../services/playListService";
import ErrorMessaje from "../errorMessaje";
import Navbar from "../navbar";
import Search from "../search";

export default function VideoPlayList() {
  const [response, setResponse] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [db, setDb] = useState(playListService);

  useEffect(() => {
    getVideos();
  }, []);

  function getVideos() {
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
    <>
      <Navbar />
      <Search response={response} setResponse={setResponse} />
      {error && <ErrorMessaje errorResponse={error} />}
    </>
  );
}
