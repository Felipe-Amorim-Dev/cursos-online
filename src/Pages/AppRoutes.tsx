import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../Pages/Home/Home";
import Catalogo from "../Pages/Catalogo/Catalogo";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cursos" element={<Catalogo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;