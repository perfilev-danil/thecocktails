import { useOptionedData } from "../../../features/Cocktails/hooks/useOptionedData";
import List from "../../../features/Cocktails/ui/List/List";

const OptionedCocktails = () => {
  const { cockctails } = useOptionedData();

  return (
    <div>
      OptionedCocktails
      <List items={cockctails ?? []} />
    </div>
  );
};

export default OptionedCocktails;
