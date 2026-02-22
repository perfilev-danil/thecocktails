import { useOptionedData } from "../../../features/Cocktails/hooks/useOptionedData";
import List from "../../../features/Cocktails/ui/List/List";

const OptionedCocktails = () => {
  const { cockctails } = useOptionedData();

  return (
    <section>
      OptionedCocktails
      <List items={cockctails ?? []} />
    </section>
  );
};

export default OptionedCocktails;
