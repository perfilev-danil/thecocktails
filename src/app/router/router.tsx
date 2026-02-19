import { Routes, Route } from "react-router-dom";
import OptionsLayout from "../../pages/Options/OptionsLayout/OptionsLayout";
import OptionedCocktails from "../../pages/Options/OptionedCocktails/OptionedCocktails";
import OptionedCocktail from "../../pages/Options/OptionedCocktail/OptionedCocktail";

const AppRouter = () => {
  return (
    <Routes>
      <Route path=":optionType" element={<OptionsLayout />}>
        <Route path=":optionSlug" element={<OptionedCocktails />} />
        <Route path=":optionSlug/:cocktailId" element={<OptionedCocktail />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
