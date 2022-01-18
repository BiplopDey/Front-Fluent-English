import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Create from "./create";
import Favorites from "./favorites";
function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<Create />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
