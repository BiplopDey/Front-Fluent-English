import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Favorites from "../pages/favorites";
import VideoPlayList from "../pages/videoPlayList";
import WordView from "../pages/wordView";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/videos" element={<VideoPlayList />} />
        <Route path="/wordProfile/:id" element={<WordView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
