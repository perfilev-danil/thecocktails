import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async () => {
    navigate(`/searched/${searchValue}`);
  };

  return (
    <div>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Cocktail name"
      />
      <button onClick={handleSearch}>search</button>
    </div>
  );
};

export default Search;
