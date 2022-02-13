import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Favorites from "../pages/favorites";
import VideoPlayList from "./playList/videoPlayList";
import WordProfile from "./wordProfile";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/videos" element={<VideoPlayList />} />
        <Route path="/wordProfile/:id" element={<WordProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
