import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchWeather } from "../features/weather/weatherSlice";

const SearchBar = () => {
  const [city, setCity] = useState("");
  const dispatch = useDispatch();
  const handleSearch = () => {
    if (city) dispatch(fetchWeather(city));
  };

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="Enter city"
        className="input"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="searchBtn" onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchBar;