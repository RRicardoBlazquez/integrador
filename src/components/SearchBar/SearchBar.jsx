import style from "./SearchBar.module.css";
import { useState } from "react";

export default function SearchBar(props) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };

  return (
    <div className={style.container}>
      <input
        className={style.Search}
        placeholder="Enter your password... "
        value={id}
        onChange={handleChange}
        type="search"
      />
      <button className={style.button} onClick={() => props.onSearch(id)}>
        Add
      </button>
    </div>
  );
}
