import styles from "./OptionsList.module.scss";
import { useOptionedData } from "../../../entities/cocktail/hooks/useOptionedData";
import Options from "../../../entities/cocktail/ui/Options/Options";
import Loading from "../../../shared/ui/Loading/Loading";

const OptionsList = () => {
  const { list, isListLoading } = useOptionedData();

  return (
    <aside className={styles.options}>
      {isListLoading ? <Loading /> : <Options items={list ?? []} />}
    </aside>
  );
};

export default OptionsList;
