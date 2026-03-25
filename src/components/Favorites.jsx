 import { useSelector, useDispatch } from "react-redux";
import { fetchWeather } from "../features/weather/weatherSlice";
import { removeFavorite } from "../features/favorites/favoritesSlice";

const Favorites = () => {
  const { cities } = useSelector((state) => state.favorites);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Favorites</h3>
      {cities.map((city) => (
        <div key={city}>
          <span className="fav-city" onClick={() => dispatch(fetchWeather(city))}>
            {city}
          </span>
          <button className="removeBtn" onClick={() => dispatch(removeFavorite(city))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
};

export default Favorites;