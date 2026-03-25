
import "./App.css"
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import Favorites from "./components/Favorites";

function App() {
  return (
    <div className="app-container">
      <h1>Weather Dashboard</h1>
      <SearchBar />
      <WeatherCard />
      <Favorites />
    </div>
  );
}

export default App;