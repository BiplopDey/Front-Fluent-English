import React, { useEffect, useState } from "react";
import { playListService } from "../../services/playListService";
import Loader from "../loader";
import Video from "../../video/video";

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

  return (
    <>
      <Video embedId={currentVideo} hide={collapse} />
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
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={() => {
          setCollapse(!collapse);
        }}
      >
        {collapse ? "UnCollapse" : "Collapse"}
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
}
