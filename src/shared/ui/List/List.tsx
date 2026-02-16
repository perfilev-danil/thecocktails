import type { CocktailShortUI } from "../../types/ui/cocktailShortUI";
import Card from "../Card/Card";

const List = ({ items }: { items: CocktailShortUI[] }) => {
  return (
    <div>
      {items.map((item: CocktailShortUI) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
