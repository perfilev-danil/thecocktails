import styles from "./Searched.module.scss";
import { useParams } from "react-router-dom";
import { useGetCocktailsByNameQuery } from "../../features/Cocktails/api/cocktailsApi";
import { skipToken } from "@reduxjs/toolkit/query";
import List from "../../features/Cocktails/ui/List/List";
import Loading from "../../shared/ui/Loading/Loading";

const Searched = () => {
  const { cocktailName } = useParams();
  const { data: cocktails, isLoading } = useGetCocktailsByNameQuery(
    cocktailName ?? skipToken,
  );
  return (
    <section className={styles.searched}>
      {isLoading ? <Loading /> : <List items={cocktails ?? []} />}
    </section>
  );
};

export default Searched;
