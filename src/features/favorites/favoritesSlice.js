import { createSlice } from "@reduxjs/toolkit";

const loadFavorites = () => {
  const data = localStorage.getItem("favorites");
  return data ? JSON.parse(data) : [];
};

const saveFavorites = (favorites) => {
  localStorage.setItem("favorites", JSON.stringify(favorites));
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    cities: loadFavorites(),
  },
  reducers: {
    addFavorite: (state, action) => {
      if (!state.cities.includes(action.payload)) {
        state.cities.push(action.payload);
        saveFavorites(state.cities);
      }
    },
    removeFavorite: (state, action) => {
      state.cities = state.cities.filter(
        (city) => city !== action.payload
      );
      saveFavorites(state.cities);
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;