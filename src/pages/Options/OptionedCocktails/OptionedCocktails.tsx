import styles from "./OptionedCocktails.module.scss";
import { useOptionedData } from "../../../features/Cocktails/hooks/useOptionedData";
import List from "../../../features/Cocktails/ui/List/List";
import Loading from "../../../shared/ui/Loading/Loading";

const OptionedCocktails = () => {
  const { cocktails, isCocktailsLoading } = useOptionedData();

  return (
    <section className={styles.cocktails}>
      {isCocktailsLoading ? <Loading /> : <List items={cocktails ?? []} />}
    </section>
  );
};

export default OptionedCocktails;
