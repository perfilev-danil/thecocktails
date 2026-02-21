import { useOptionedData } from "../../../features/Cocktails/hooks/useOptionedData";
import Options from "../../../features/Cocktails/ui/Options/Options";

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
