import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Favorites from "./favorites";
import VideoPlayList from "./playList/videoPlayList";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/videos" element={<VideoPlayList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
