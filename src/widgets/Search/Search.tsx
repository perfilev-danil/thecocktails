import styles from "./Search.module.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import searchImg from "../../assets/ui/search.svg";

const Search = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = async () => {
    if (!searchValue.trim()) return null;
    navigate(`/searched/${searchValue}`);
  };

  return (
    <div className={styles.search}>
      <input
        className={styles.search__input}
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Cocktail name"
      />
      <button className={styles.search__button} onClick={handleSearch}>
        <img className={styles.search__icon} src={searchImg} />
      </button>
    </div>
  );
};

export default Search;
