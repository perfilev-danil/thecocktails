import styles from "./List.module.scss";
import type { CocktailShortUI } from "../../types/ui/cocktails/cocktailShortUI";
import Card from "../Card/Card";

const List = ({ items }: { items: CocktailShortUI[] }) => {
  if (!items) {
    return <div>no items!</div>;
  }
  return (
    <ul className={styles.list}>
      {items.map((item: CocktailShortUI) => (
        <li className={styles.list__item} key={item.id}>
          <Card item={item} />
        </li>
      ))}
    </ul>
  );
};

export default List;
