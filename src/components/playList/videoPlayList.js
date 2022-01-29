import React, { useEffect, useState } from "react";
import { playListService } from "../../services/playListService";
import ErrorMessaje from "../errorMessaje";
import Navbar from "../navbar";
import Search from "../search";
import VideoCard from "./videoCard";

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

  function deleteVideo(video) {
    db.delete(video).then(() => {
      setDb({ ...db });
    });
  }

  function addVideo(video) {
    db.add(video).then(() => {
      setDb({ ...db });
    });
  }

  return (
    <>
      <Navbar />
      <Search response={response} setResponse={setResponse} />
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          addVideo({ url: response });
        }}
      >
        Add
      </button>
      {error && <ErrorMessaje errorResponse={error} />}
      <ul className="list-group">
        {db.list.map((video) => (
          <VideoCard video={video} deleteVideo={deleteVideo} />
        ))}
      </ul>
    </>
  );
}
