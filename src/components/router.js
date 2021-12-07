import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Ejemplo from "./ejemplo";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/ejemplo" element={<Ejemplo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
