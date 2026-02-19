import { NavLink } from "react-router-dom";
import type { CocktailShortUI } from "../../types/ui/cocktails/cocktailShortUI";

const Card = ({ item }: { item: CocktailShortUI }) => {
  return (
    <article>
      <NavLink to={`${item.id}`}>
        <div>
          <img src={item.image} style={{ width: "100px", height: "100px" }} />
        </div>
        <h2>{item.name}</h2>
      </NavLink>
    </article>
  );
};

export default Card;
