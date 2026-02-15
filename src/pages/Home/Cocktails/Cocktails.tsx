import { useGetCocktailsByCategoryQuery } from "../../../shared/api/cocktailsApi";
import { useParams } from "react-router-dom";
import { fromSlug } from "../../../shared/lib/slug/fromSlug";

const Cocktails = () => {
  const { category: slug } = useParams();
  const realCategory = fromSlug(slug);
  //console.log("real", realCategory);
  const { data: cocktails } = useGetCocktailsByCategoryQuery(realCategory);
  console.log(cocktails);
  return <div>Cocktails</div>;
};

export default Cocktails;
