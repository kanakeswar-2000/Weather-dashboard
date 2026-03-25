import { useSelector, useDispatch } from "react-redux";
import { addFavorite } from "../features/favorites/favoritesSlice";

const WeatherCard = () => {
  const { data, loading, error } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="error">{error}</p>;
  console.log(data)
  return data ? (
    <div className="weather-card">
      <h2>{data.name}</h2>
      <p className="temp">{data.main.temp}°C</p>
      <p className="weather">{data.weather[0].description}</p>
      <button className="favBtn" onClick={() => dispatch(addFavorite(data.name))}>
        Add to Favorites
      </button>
    </div>
  )  :null;

};

export default WeatherCard;