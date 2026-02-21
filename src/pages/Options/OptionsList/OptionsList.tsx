import { useOptionedData } from "../../../shared/hooks/useOptionedData";
import Options from "../../../shared/ui/Options/Options";

const OptionsList = () => {
  const { list } = useOptionedData();

  return (
    <div>
      OptionsList
      <Options items={list ?? []} />
    </div>
  );
};

export default OptionsList;
