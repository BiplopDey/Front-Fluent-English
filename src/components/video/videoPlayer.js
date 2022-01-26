import React, { useEffect, useState } from "react";
import { playListService } from "../../services/playListService";
import Loader from "../loader";
import Video from "./video";

export default function VideoPlayer({ videoUrl }) {
  const [db, setDb] = useState(playListService);
  let [loading, setLoading] = useState(false);
  let [currentVideo, setCurrentVideo] = useState(videoUrl);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    setLoading(true);
    db.fetchAll().then(() => {
      setDb({ ...db });
      if (videoUrl.length === 0) setCurrentVideo(db.nextVideo());
      setLoading(false);
    });
  }

  if (loading) return <Loader />;

  return (
    <>
      <Video embedId={currentVideo} />
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => setCurrentVideo(db.prevVideo())}
      >
        Prev
      </button>
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => setCurrentVideo(db.nextVideo())}
      >
        Next
      </button>
    </>
  );
}
