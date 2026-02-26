import styles from "./Favorites.module.scss";
import { useAppSelector } from "../../app/providers/hooks/hooks";
import { selectFavoritesByIds } from "../../features/Cocktails/model/favoritesSelectors";
import { useGetFavoriteCocktailsQuery } from "../../features/Cocktails/api/cocktailsApi";
import List from "../../features/Cocktails/ui/List/List";
import Loading from "../../shared/ui/Loading/Loading";

const Favorites = () => {
  const favoritesByIds = useAppSelector(selectFavoritesByIds);
  const { data: cocktails, isLoading } =
    useGetFavoriteCocktailsQuery(favoritesByIds);
  return (
    <section className={styles.favorites}>
      <h1>favorites</h1>
      {isLoading ? <Loading /> : <List items={cocktails ?? []} />}
    </section>
  );
};

export default Favorites;
