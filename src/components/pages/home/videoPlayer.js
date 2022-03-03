import React, { useEffect, useState } from "react";
import { playListService } from "../../../services/playListService";
import Loader from "../../loader";
import Video from "./video";

export default function VideoPlayer({ currentVideo, setCurrentVideo }) {
  let [db, setDb] = useState(playListService);
  let [loading, setLoading] = useState(false);
  const [collapse, setCollapse] = useState(false);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    setLoading(true);
    db.fetchAll().then(() => {
      db = { ...db };
      setDb(db);
      if (currentVideo.length === 0) setCurrentVideo(db.nextVideo());
      setLoading(false);
    });
  }

  function addCurrentVideoToPlayList() {
    db.add({ url: currentVideo }).then(() => {
      setDb({ ...db });
    });
  }

  if (loading) return <Loader />;
  const buttons = (
    <>
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => setCurrentVideo(db.prevVideo())}
      >
        <i className="bi bi-caret-left-fill"></i>
      </button>
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => setCurrentVideo(db.nextVideo())}
      >
        <i className="bi bi-caret-right-fill"></i>
      </button>
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => {
          setCollapse(!collapse);
        }}
      >
        <i
          className={collapse ? "bi bi-arrows-expand" : "bi bi-arrows-collapse"}
        ></i>
      </button>
      {!db.containsInPlayList(currentVideo) && (
        <button
          className="btn btn-outline-secondary"
          type="button"
          onClick={addCurrentVideoToPlayList}
        >
          Add to PlayList
        </button>
      )}
    </>
  );
  return (
    <div className="mb-2">
      <Video embedId={currentVideo} hide={collapse} />

      <div className="container">
        <div className="row">
          <div className="col text-center">{buttons}</div>
        </div>
      </div>
    </div>
  );
}
