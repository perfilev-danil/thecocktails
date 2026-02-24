import styles from "./OptionsList.module.scss";
import { useOptionedData } from "../../../features/Cocktails/hooks/useOptionedData";
import Options from "../../../features/Cocktails/ui/Options/Options";

const OptionsList = () => {
  const { list } = useOptionedData();

  return (
    <aside className={styles.options}>
      <Options items={list ?? []} />
    </aside>
  );
};

export default OptionsList;
