import styles from "./OptionsList.module.scss";
import { useOptionedData } from "../../../features/Cocktails/hooks/useOptionedData";
import Options from "../../../features/Cocktails/ui/Options/Options";
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
