import style from "./Nav.module.css";
import SearchBar from "../SearchBar/SearchBar";

export default function Nav(props) {
  return (
    <div className={style.container}>
      <SearchBar onSearch={props.onSearch} />
    </div>
  );
}
