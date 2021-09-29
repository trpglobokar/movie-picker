import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

export interface FiltersState {
  rating: number;
  genres: number[];
}

const initialState: FiltersState = {
  rating: 1,
  genres: [],
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeRating: (state, action: PayloadAction<number>) => {
      state.rating = action.payload;
    },
    updateSelectedGenres: (state, action: PayloadAction<number>) => {
      let newGenres = state.genres;

      if (newGenres.includes(action.payload)) {
        newGenres = newGenres.filter((genreId) => genreId !== action.payload);
      } else {
        newGenres.push(action.payload);
      }

      state.genres = newGenres; //TODO: find cleaner way to write this
    },
  },
});

export const { changeRating, updateSelectedGenres } = filterSlice.actions;

export const selectFilteredGenres = (state: RootState) => state.filters.genres;

export const selectFilteredRating = (state: RootState) => state.filters.rating;

export const selectFilteredMovies = (state: RootState) =>
  state.list.movies
    .filter((movie) => movie.vote_average > state.filters.rating)
    .filter((movie) =>
      state.filters.genres.every((genre) => movie.genre_ids.includes(genre))
    );
export default filterSlice.reducer;
