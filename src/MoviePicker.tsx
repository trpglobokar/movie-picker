import React, { FunctionComponent, useEffect, useState } from "react"
import {
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import styled from "styled-components"

import TopBar from "./renders/TopBar"
import WelcomeDialog from "./renders/WelcomeDialog"
import AllMovies from "./renders/AllMovies"
import RandomSelect from "./renders/RandomSelect"
import ToggleMaster from "./pickers/ToggleMaster"

import "./static/fonts.css"

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY

const CenterFlex = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const LoadingText = styled(Typography)`
  margin-right: 16px !important;
`
const AppContainer = styled.div`
  height: 100%;
`
const MovieListWrapper = styled.div`
  margin: 16px 32px 0 32px;
  max-height: calc(100vh - 96px);
  overflow: scroll;
`

const theme = createMuiTheme({
  palette: {
    primary: { main: "#23B5D3", contrastText: "#FBFBFB" },
    secondary: { main: "#071013", contrastText: "#FBFBFB" },
  },
  typography: {
    fontFamily: [
      "Khand",
      "Raleway",
      "typeface-roboto",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
})

const MoviePicker:FunctionComponent = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [filteredMovies, setFilteredMovies] = useState<any[]>([]); //TODO: make a custom movie type
  const [listId, setListId] = useState("108073"); //TODO: combo these into a single list object
  const [listName, setListName] = useState("");
  const [movies, setMovies] = useState<any[]>([]); //TODO: name this listMovies
  const [selectedGenres, setSelectedGenres] = useState<any[]>([]);
  const [selectedRating, setSelectedRating] = useState(1);

  useEffect(() => {
    let ignore = false;

    async function fetchData() { //TODO: put into utils file for cleanliness
      let totalMovies: any[] = [];
      const baseURL: string = `https://api.themoviedb.org/4/list/${listId}?api_key=${TMDB_API_KEY}&language=en-US`;
      let flexURL: string = baseURL;
      let resolved: boolean = false;
      let listName: string = "";

      try {
        while (!resolved) {
          let response = await fetch(flexURL);
          let json = await response.json();
          listName = json.name;
          totalMovies = totalMovies.concat(json.results);
          if (json.page < json.total_pages) {
            flexURL = `${baseURL}&page=${json.page + 1}`;
          } else {
            resolved = true;
          }
        }
      } catch (err) {
        alert(err); // TypeError: failed to fetch
      }

      if (!ignore) {
        setListId(listId);
        setListName(listName);
        setMovies(totalMovies);
        setFilteredMovies(totalMovies); //TODO: filter this as well
        setIsLoaded(true);
      };
    }

    fetchData();
    return () => { ignore = true; }
  }, [listId]);

  if (!isLoaded) {
    return ( //TODO: break this into its own component + add shimmers
      <MuiThemeProvider theme={theme}>
        <CenterFlex>
          <LoadingText>Loading...</LoadingText>
          <CircularProgress />
        </CenterFlex>
      </MuiThemeProvider>
    )
  }

  return (
    <MuiThemeProvider theme={theme}>
      <AppContainer>
        <TopBar
          editListId={(listId: string) => setListId(listId)}
          listId={listId}
          listName={listName}
        />
        <Grid container>
          <Grid item xs={4}>
            <ToggleMaster
              selectedRating={selectedRating}
              selectedGenres={selectedGenres}
              updateSelections={(selectedGenres:any[], selectedRating:number) => {
                const filteredMovies = movies
                  .filter(movie => movie.vote_average > selectedRating)
                  .filter(movie =>
                    selectedGenres.every(genre => movie.genre_ids.includes(parseInt(genre)))
                  );

                setSelectedGenres(selectedGenres);
                setSelectedRating(selectedRating);
                setFilteredMovies(filteredMovies);
              }}
            />
          </Grid>
          <Grid item xs={8}>
            <MovieListWrapper>
              <AllMovies movies={filteredMovies} />
            </MovieListWrapper>
          </Grid>
        </Grid>
        <RandomSelect filteredMovies={filteredMovies} />
        <WelcomeDialog />
      </AppContainer>
    </MuiThemeProvider>
  )
};

export default MoviePicker;
