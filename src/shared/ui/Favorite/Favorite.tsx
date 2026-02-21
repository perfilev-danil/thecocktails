import { useAppDispatch, useAppSelector } from "../../../app/hooks/hooks";
import { toggleFavorite } from "../../../features/favorites/model/favoritesSlice";
import { selectFavoritesByIdMap } from "../../../features/favorites/model/favoritesSelectors";

const Favorite = ({ itemId }: { itemId: string }) => {
  const dispatch = useAppDispatch();
  const favoritesById = useAppSelector(selectFavoritesByIdMap);

  const isFavorite = Boolean(favoritesById[itemId]);
  return (
    <button onClick={() => dispatch(toggleFavorite(itemId))}>
      {isFavorite ? "❤️" : "🤍"}
    </button>
  );
};

export default Favorite;
//🤍❤️
// {favorites.includes(itemId) ? "❤️" : "🤍"}
