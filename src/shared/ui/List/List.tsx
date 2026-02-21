import type { CocktailShortUI } from "../../types/ui/cocktails/cocktailShortUI";
import Card from "../Card/Card";

const List = ({ items }: { items: CocktailShortUI[] }) => {
  if (!items) {
    return <div>no items!</div>;
  }
  return (
    <div>
      {items.map((item: CocktailShortUI) => (
        <Card key={item.id} item={item} />
      ))}
    </div>
  );
};

export default List;
