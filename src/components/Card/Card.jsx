import { NavLink } from "react-router-dom";
import style from "./Card.module.css";
import { useEffect, useState } from "react";
import { addFav, removeFav } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Card(props) {
  const [isFav, setIsfav] = useState(false);
  const { allCharacter } = useSelector((state) => state);
  const dispatch = useDispatch();

  const handleFavorite = () => {
    if (isFav) {
      setIsfav(false);
      dispatch(removeFav(props.id));
    } else {
      setIsfav(true);
      dispatch(addFav(props));
    }
  };

  useEffect(() => {
    allCharacter?.forEach((fav) => {
      if (fav.id === props.id) {
        setIsfav(true);
      }
    });
  }, [allCharacter, props.id]);

  return (
    <div className={style.container}>
      <div className={style.botones}>
        {isFav ? (
          <button className={style.like} onClick={handleFavorite}>
            ❤️
          </button>
        ) : (
          <button className={style.like} onClick={handleFavorite}>
            🤍
          </button>
        )}
        <button className={style.button} onClick={props.onClose}>
          X
        </button>
      </div>
      <img className={style.img} src={props.image} alt="" />
      <NavLink className={style.nav} to={`/detail/${props.id}`}>
        <h2 className={style.Text}>{props.name}</h2>
      </NavLink>
      {/* <h2 className={style.Text}>status:{props.status}</h2>
      <h2 className={style.Text}>{props.species}</h2>
      <h2 className={style.Text}>{props.gender}</h2>
      <h2 className={style.Text}>origen:{props.origin}</h2> */}
    </div>
  );
}

/* export default connect(null, null)(Card); */
