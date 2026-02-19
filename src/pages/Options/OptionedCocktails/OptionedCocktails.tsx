import { useOptionedData } from "../../../shared/hooks/useOptionedData";
import List from "../../../shared/ui/List/List";

const OptionedCocktails = () => {
  const { cockctails } = useOptionedData();

  return (
    <div>
      OptionedCocktails
      <List items={cockctails} />
    </div>
  );
};

export default OptionedCocktails;
