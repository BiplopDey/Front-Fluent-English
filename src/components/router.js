import { BrowserRouter, Route } from "react-router-dom";
import App from "../App";
import Ejemplo from "./ejemplo";

function Router() {
  return (
    <BrowserRouter>
      <Route path="/" element={<App />} />
      <Route path="/ejemplo" element={<Ejemplo />} />
    </BrowserRouter>
  );
}
