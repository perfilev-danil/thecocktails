import { useState } from "react";
import { useGetCategoriesQuery } from "../../../shared/api/categoriesApi";
import { NavLink } from "react-router-dom";
import { toSlug } from "../../../shared/lib/slug/toSlug";
const Categories = () => {
  const { data: categories } = useGetCategoriesQuery();
  const [category, setCategory] = useState("Category");
  return (
    <div>
      Categories
      <h1>{category}</h1>
      <ul>
        {categories?.map((category) => (
          <li key={category.name} onClick={() => setCategory(category.name)}>
            <NavLink to={`/cocktails/${toSlug(category.name)}`}>
              {category.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
