import { useParams, useNavigate } from "react-router-dom";
import { useGetCocktailByIdQuery } from "../../../shared/api/cocktailsApi";
import { skipToken } from "@reduxjs/toolkit/query";

const OptionedCocktail = () => {
  const { cocktailId } = useParams();
  const navigate = useNavigate();
  const { data: cocktail } = useGetCocktailByIdQuery(cocktailId ?? skipToken);
  return (
    <div>
      <button onClick={() => navigate(-1)}>back</button>
      <div key={cocktail?.id} style={{ display: "flex" }}>
        <div>
          <h1>{cocktail?.name}</h1>
          <span>{cocktail?.tags}</span>
          <span>{cocktail?.iba}</span>
          <span>{cocktail?.alcoholic}</span>
          <span>{cocktail?.glass}</span>
        </div>
        <img src={cocktail?.image} alt="" style={{ height: "100px" }} />
      </div>
      <p>{cocktail?.instructions}</p>
    </div>
  );
};

export default OptionedCocktail;
