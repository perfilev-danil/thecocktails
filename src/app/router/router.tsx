import React from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import Home from "../../pages/Home/Home";
import Cocktail from "../../pages/Cocktail/Cocktail";
import Cocktails from "../../pages/Home/Cocktails/Cocktails";
import Favorites from "../../pages/Favorites/Favorites";

const AppRouter = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path={routes.Cocktail} element={<Cocktail />} />
      <Route path={routes.Cocktails} element={<Cocktails />} />
      <Route path={routes.Favorites} element={<Favorites />} />
    </Routes>
  );
};

export default AppRouter;
