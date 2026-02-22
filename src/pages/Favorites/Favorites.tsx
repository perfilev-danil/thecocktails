import { useAppSelector } from "../../app/providers/hooks/hooks";
import { selectFavoritesByIds } from "../../features/Cocktails/model/favoritesSelectors";
import { useGetFavoriteCocktailsQuery } from "../../features/Cocktails/api/cocktailsApi";
import List from "../../features/Cocktails/ui/List/List";

const Favorites = () => {
  const favoritesByIds = useAppSelector(selectFavoritesByIds);

  const { data: cocktails } = useGetFavoriteCocktailsQuery(favoritesByIds);

  return (
    <section>
      <h1>favorites</h1>
      <List items={cocktails ?? []} />
    </section>
  );
};

export default Favorites;
