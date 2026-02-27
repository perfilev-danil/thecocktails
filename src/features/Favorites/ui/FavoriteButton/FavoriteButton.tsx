import styles from "./FavoriteButton.module.scss";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../../app/providers/hooks/hooks";
import { toggleFavorite } from "../../model/favoritesSlice";
import { selectFavoritesByIdMap } from "../../model/favoritesSelectors";
import favoriteImg from "../../../../assets/ui/favorite.svg";
import nonFavoriteImg from "../../../../assets/ui/non-favorite.svg";
import { useState } from "react";

const FavoriteButton = ({ itemId }: { itemId: string }) => {
  const dispatch = useAppDispatch();
  const favoritesById = useAppSelector(selectFavoritesByIdMap);
  const isFavorite = Boolean(favoritesById[itemId]);
  const [isAnimating, setIsAnimating] = useState(false);
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(toggleFavorite(itemId));
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 400);
  };
  return (
    <button className={styles.button} type="button" onClick={handleClick}>
      <img
        className={`${styles.button__icon} ${isAnimating ? styles.shake : ""}`}
        src={isFavorite ? favoriteImg : nonFavoriteImg}
        alt=""
      />
    </button>
  );
};

export default FavoriteButton;
