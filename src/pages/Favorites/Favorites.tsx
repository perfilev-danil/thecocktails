import styles from "./Favorites.module.scss";
import { useAppSelector } from "../../app/providers/hooks/hooks";
import { selectFavoritesByIds } from "../../features/Favorites/model/favoritesSelectors";
import { useGetFavoriteCocktailsQuery } from "../../entities/cocktail/api/cocktailsApi";
import List from "../../entities/cocktail/ui/List/List";
import Loading from "../../shared/ui/Loading/Loading";

const Favorites = () => {
  const favoritesByIds = useAppSelector(selectFavoritesByIds);
  const { data: cocktails, isLoading } =
    useGetFavoriteCocktailsQuery(favoritesByIds);
  return (
    <section className={styles.favorites}>
      {isLoading ? <Loading /> : <List items={cocktails ?? []} />}
    </section>
  );
};

export default Favorites;
