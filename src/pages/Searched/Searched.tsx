import { useParams } from "react-router-dom";
import { useGetCocktailsByNameQuery } from "../../shared/api/cocktailsApi";
import { skipToken } from "@reduxjs/toolkit/query";
import List from "../../shared/ui/List/List";

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
