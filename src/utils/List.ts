import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY;

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  media_type: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface ListState {
  id: string;
  isLoaded: boolean; //TODO: make enum
  name: string;
  movies: Movie[];
}

const initialState: ListState = {
  id: "108073",
  isLoaded: false,
  name: "Rocky's Recommended  Movies",
  movies: [],
};

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const loadListByIdAsync = createAsyncThunk(
  "list/loadListById",
  async (id: string) => {
    let resolved: boolean = false;
    const baseURL: string = `https://api.themoviedb.org/4/list/${id}?api_key=${TMDB_API_KEY}&language=en-US`;
    let flexURL: string = baseURL;

    let name: string = "";
    let movies: Movie[] = [];

    try {
      while (!resolved) {
        let response = await fetch(flexURL);
        let json = await response.json();

        name = json.name;
        movies = movies.concat(json.results);
        if (json.page < json.total_pages) {
          flexURL = `${baseURL}&page=${json.page + 1}`;
          await sleep(500);
        } else {
          resolved = true;
        }
      }
    } catch (err) {
      alert(err); // TypeError: failed to fetch
    }

    return { id, name, movies };
  }
);

export const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {
    changeListId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loadListByIdAsync.pending, (state) => {
        state.isLoaded = false;
      })
      .addCase(
        loadListByIdAsync.fulfilled,
        (
          state,
          action: PayloadAction<{ id: string; name: string; movies: Movie[] }>
        ) => {
          state.isLoaded = true;
          state.id = action.payload.id;
          state.name = action.payload.name;
          state.movies = action.payload.movies.filter((movie) => !!movie);
        }
      );
  },
});

export const { changeListId } = listSlice.actions;

export const selectList = (state: RootState) => state.list;

export default listSlice.reducer;
