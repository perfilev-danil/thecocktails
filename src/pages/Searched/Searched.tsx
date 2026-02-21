import { useParams } from "react-router-dom";
import { useGetCocktailsByNameQuery } from "../../features/Cocktails/api/cocktailsApi";
import { skipToken } from "@reduxjs/toolkit/query";
import List from "../../features/Cocktails/ui/List/List";

const Searched = () => {
  const { cocktailName } = useParams();

  const { data: cocktails } = useGetCocktailsByNameQuery(
    cocktailName ?? skipToken,
  );

  return (
    <div>
      Searched
      <List items={cocktails ?? []} />
    </div>
  );
};

export default Searched;
