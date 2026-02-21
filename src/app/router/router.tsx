import { Routes, Route } from "react-router-dom";
import OptionsLayout from "../../pages/Options/OptionsLayout/OptionsLayout";
import OptionedCocktails from "../../pages/Options/OptionedCocktails/OptionedCocktails";
import OptionedCocktail from "../../pages/Options/OptionedCocktail/OptionedCocktail";
import Searched from "../../pages/Searched/Searched";
import Favorites from "../../pages/Favorites/Favorites";

const AppRouter = () => {
  return (
    <Routes>
      <Route path=":optionType" element={<OptionsLayout />}>
        <Route path=":optionSlug" element={<OptionedCocktails />} />
        <Route path=":optionSlug/:cocktailId" element={<OptionedCocktail />} />
      </Route>
      <Route path="/searched/:cocktailName" element={<Searched />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/favorites/:cocktailId" element={<OptionedCocktail />} />
    </Routes>
  );
};

export default AppRouter;
