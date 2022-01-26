import React, { useEffect, useState } from "react";
import Video from "./video";

export default function VideoPlayer({ playList, currentPlaying }) {
  const index = 0;
  const playListLength = playList.length;
  let [currentIndex, setCurrentIndex] = useState(index);

  function next() {
    currentIndex = mod(currentIndex + 1);
    setCurrentIndex(currentIndex);
  }

  const mod = (number) =>
    ((number % playListLength) + playListLength) % playListLength;

  function prev() {
    currentIndex = mod(currentIndex - 1);
    setCurrentIndex(currentIndex);
  }

  return (
    <>
      <Video embedId={playList[currentIndex]} />
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={prev}
      >
        Prev
      </button>
      <button
        className="btn btn-outline-secondary"
        type="button"
        onClick={next}
      >
        Next
      </button>
    </>
  );
}
