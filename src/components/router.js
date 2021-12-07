import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Create from "./create";
import Ejemplo from "./ejemplo";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<Create />} />
        <Route path="/ejemplo" element={<Ejemplo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
