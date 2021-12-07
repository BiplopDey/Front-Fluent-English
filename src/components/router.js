import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import Create from "./create";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
