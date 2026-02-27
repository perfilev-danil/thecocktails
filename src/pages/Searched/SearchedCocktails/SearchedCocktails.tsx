import styles from "./SearchedCocktails.module.scss";
import { useParams } from "react-router-dom";
import { useGetCocktailsByNameQuery } from "../../../entities/cocktail/api/cocktailsApi";
import { skipToken } from "@reduxjs/toolkit/query";
import List from "../../../entities/cocktail/ui/List/List";
import Loading from "../../../shared/ui/Loading/Loading";

const Searched = () => {
  const { cocktailName } = useParams();
  const { data: cocktails, isLoading } = useGetCocktailsByNameQuery(
    cocktailName ?? skipToken,
  );
  return (
    <section className={styles.searched}>
      Searched
      {isLoading ? <Loading /> : <List items={cocktails ?? []} />}
    </section>
  );
};

export default Searched;
