import styles from "./List.module.scss";
import type { CocktailShortUI } from "../../types/ui/cocktails/cocktailShortUI";
import Card from "../Card/Card";
import { useLayoutEffect, useRef, useState } from "react";

const List = ({ items }: { items: CocktailShortUI[] }) => {
  const listRef = useRef<HTMLUListElement>(null);
  const [isScrollable, setIsScrollable] = useState(false);
  useLayoutEffect(() => {
    const currentList = listRef.current;
    if (!currentList) return;
    const check = () => {
      setIsScrollable(currentList.scrollHeight > currentList.clientHeight);
    };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [items]);

  if (!items.length) {
    return <div style={{ textAlign: "center" }}>No items here :c</div>;
  }
  return (
    <ul
      ref={listRef}
      className={`${styles.list} ${isScrollable ? styles["list--extended"] : ""}`}
    >
      {items.map((item: CocktailShortUI) => (
        <li className={styles.list__item} key={item.id}>
          <Card item={item} />
        </li>
      ))}
    </ul>
  );
};

export default List;
