import React from "react"
import { AppBar, CircularProgress, Grid, Toolbar, Typography } from "@material-ui/core"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import styled from "styled-components"

import ToggleMaster from "./pickers/toggleMaster"
import AllMovies from "./renders/allmovies"
import RandomSelect from "./renders/randomSelect"

import "./static/fonts.css"

const theme = createMuiTheme({
  palette: {
    primary: { main: "#23B5D3", contrastText: "#FBFBFB" }, // Purple and green play nicely together.
    secondary: { main: "#071013", contrastText: "#FBFBFB" } // This is just green.A700 as hex.
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
      '"Segoe UI Symbol"'
    ].join(","),
    useNextVariants: true
  }
})

const AppContainer = styled.div`
  height: 100%;
`
const CenterFlex = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const LoadingText = styled(Typography)`
  margin-right: 16px!important;
`
const MovieListWrapper = styled.div`
  margin: 32px;
  max-height: calc(100vh - 64px);
  overflow: scroll;
`

class MoviePicker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      recommendedMovie: "",
      seenBy: ["Jake", "Rocky"],
      selectedGenres: [],
      selectedRating: 1,
      movies: [],
      filteredMovies: []
    }
  }

  async componentDidMount() {
    let totalMovies = []
    const baseURL =
      "https://api.themoviedb.org/4/list/108073?api_key=43a2c46891bb2b3bb8fccd7b04ce1f02&language=en-US"
    let flexURL = baseURL
    let resolved = false

    try {
      while (!resolved) {
        let response = await fetch(flexURL)
        let json = await response.json()
        totalMovies = totalMovies.concat(json.results)
        if (json.page < json.total_pages) {
          flexURL = `${baseURL}&page=${json.page + 1}`
        } else {
          resolved = true
        }
      }
    } catch(err) {
      alert(err); // TypeError: failed to fetch
    }

    this.setState({
      isLoaded: true,
      movies: totalMovies,
      filteredMovies: totalMovies
    })
  }

  filterDaMovies(selectedGenres, selectedRating) {
    const movies = this.state.movies
      .filter(movie => movie.vote_average > selectedRating)
      .filter(movie =>
        selectedGenres.every(genre => movie.genre_ids.includes(parseInt(genre)))
      )
    return movies
  }

  render() {
    if (!this.state.isLoaded) {
      return (
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
          <AppBar position="static" color="secondary">
            <Toolbar>
              <Typography variant="h6" color="inherit">
                Movie List
              </Typography>
            </Toolbar>
          </AppBar>
          <Grid container>
            <Grid item xs={4}>
              <ToggleMaster
                selectedRating={this.state.selectedRating}
                selectedGenres={this.state.selectedGenres}
                updateSelections={(selectedGenres, selectedRating) => {
                  const filteredMovies = this.filterDaMovies(
                    selectedGenres,
                    selectedRating
                  )
                  this.setState({
                    selectedGenres,
                    selectedRating,
                    filteredMovies
                  })
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <MovieListWrapper>
                <AllMovies movies={this.state.filteredMovies} />
              </MovieListWrapper>
            </Grid>
          </Grid>
          <RandomSelect filteredMovies={this.state.filteredMovies} />
        </AppContainer>
      </MuiThemeProvider>
    )
  }
}

export default MoviePicker
