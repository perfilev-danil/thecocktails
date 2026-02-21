import { useAppSelector } from "../../app/hooks/hooks";
import { selectFavoritesByIds } from "../../features/favorites/model/favoritesSelectors";
import { useGetFavoriteCocktailsQuery } from "../../shared/api/cocktailsApi";
import List from "../../shared/ui/List/List";

const Favorites = () => {
  const favoritesByIds = useAppSelector(selectFavoritesByIds);

  const { data: cocktails } = useGetFavoriteCocktailsQuery(favoritesByIds);

  return <List items={cocktails ?? []} />;
};

export default Favorites;
