export default function VideoCard({ video, deleteVideo }) {
  return (
    <li className="list-group-item">
      {video.url}
      <button
        type="button"
        className="btn btn-danger btn-sm"
        onClick={() => deleteVideo(video)}
      >
        Delete
      </button>
    </li>
  );
}
