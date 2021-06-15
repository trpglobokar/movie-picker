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
import { useAppSelector, useAppDispatch } from "./utils/hooks"
import { loadListByIdAsync, selectList } from "./utils/List"

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
  const [filteredMovies, setFilteredMovies] = useState<any[]>([]);

  const [selectedGenres, setSelectedGenres] = useState<any[]>([]);
  const [selectedRating, setSelectedRating] = useState(1);

  const list = useAppSelector(selectList);
  const dispatch = useAppDispatch();

  if (!list.isLoaded) {
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
        <TopBar />
        <Grid container>
          <Grid item xs={4}>
            <ToggleMaster
              selectedRating={selectedRating}
              selectedGenres={selectedGenres}
              updateSelections={(selectedGenres:any[], selectedRating:number) => {
                const filteredMovies = list.movies
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
              <AllMovies movies={list.filteredMovies} />
            </MovieListWrapper>
          </Grid>
        </Grid>
        <RandomSelect filteredMovies={list.filteredMovies} />
        <WelcomeDialog />
      </AppContainer>
    </MuiThemeProvider>
  )
};

export default MoviePicker;
