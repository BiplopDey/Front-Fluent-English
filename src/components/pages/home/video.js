import React from "react";

export default function Video({ embedId, hide }) {
  return (
    <div
      className="video-responsive"
      style={{ display: hide ? "none" : "block" }}
    >
      <iframe
        width="853"
        height="480"
        src={`https://www.youtube.com/embed/${embedId}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded youtube"
      />
    </div>
  );
}
