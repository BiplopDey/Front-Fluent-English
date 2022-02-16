import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favorites from "../pages/favorites";
import Home from "../pages/home";
import VideoPlayList from "../pages/videoPlayList";
import WordView from "../pages/wordView";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/videos" element={<VideoPlayList />} />
        <Route path="/wordProfile/:id" element={<WordView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
