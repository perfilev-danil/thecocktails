import styles from "./Options.module.scss";
import type { ListItem } from "../../types/ui/listItems/listItem";
import { NavLink } from "react-router-dom";
import { toSlug } from "../../lib/slug/toSlug";

const Options = ({ items }: { items: ListItem[] }) => {
  if (!items) {
    return <div>no options!</div>;
  }
  return (
    <ul className={styles.options}>
      {items.map((item: ListItem) => (
        <li className={styles.options__item} key={item.name}>
          <NavLink to={`${toSlug(item.name)}`}>{item.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default Options;
