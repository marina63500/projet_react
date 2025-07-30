import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Famille from "./pages/Famille";
import FamilleDetail from "./pages/FamilleDetail";
import FamilleDetails from "./pages/FamilleDetail";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/famille" element={<Famille />} />
        <Route path="/famille/:id" element={<FamilleDetails />} />
        <Route path="/messagerie" element={<Messagerie />} />
        {/* Add more routes as needed */}
        {/* path = "*" fonctionne qd l'url ne correspond à rien de déclarer au dessus,il fait comme une redirection */}
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
