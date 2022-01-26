import React, { useEffect, useState } from "react";
import Video from "./video";

export default function VideoPlayer({ playList, currentPlaying }) {
  const index = 0;
  const playListLength = playList.length;
  const [currentIndex, setCurrentIndex] = useState(index);

  function next() {
    currentIndex = (currentIndex + 1) % playListLength;
    setCurrentIndex(currentIndex);
  }
  function prev() {
    currentIndex = (currentIndex - 1) % playListLength;
    setCurrentIndex(currentIndex);
  }

  return (
    <>
      <Video embedId={playList[currentIndex]} />
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={next}
      >
        Next
      </button>
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={prev}
      >
        Prev
      </button>
    </>
  );
}
