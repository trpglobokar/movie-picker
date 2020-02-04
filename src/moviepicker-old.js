import React from "react"
import {
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import styled from "styled-components"

import TopBar from "./renders/topBar-old"
import ToggleMaster from "./pickers/toggleMaster-old"
import AllMovies from "./renders/allmovies-old"
import RandomSelect from "./renders/randomSelect-old"
import WelcomeDialog from "./renders/welcomeDialog-old"

import "./static/fonts.css"

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY

const theme = createMuiTheme({
  palette: {
    primary: { main: "#23B5D3", contrastText: "#FBFBFB" }, // Purple and green play nicely together.
    secondary: { main: "#071013", contrastText: "#FBFBFB" }, // This is just green.A700 as hex.
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
    useNextVariants: true,
  },
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
  margin-right: 16px !important;
`
const MovieListWrapper = styled.div`
  margin: 16px 32px 0 32px;
  max-height: calc(100vh - 96px);
  overflow: scroll;
`

class MoviePicker extends React.Component {
  constructor(props) {
    super(props)

    this.editListId = this.editListId.bind(this)

    this.state = {
      listId: "108073",
      listName: "",
      listDescription: "",
      isLoaded: false,
      recommendedMovie: "",
      seenBy: ["Jake", "Rocky"],
      selectedGenres: [],
      selectedRating: 1,
      movies: [],
      filteredMovies: [],
    }
  }

  async componentDidMount() {
    const { listId } = this.state
    this._loadMovies(listId)
  }

  async _loadMovies(listId) {
    let totalMovies = []
    const baseURL = `https://api.themoviedb.org/4/list/${listId}?api_key=${TMDB_API_KEY}&language=en-US`
    let flexURL = baseURL
    let resolved = false
    let listDescription = ""
    let listName = ""

    try {
      while (!resolved) {
        let response = await fetch(flexURL)
        let json = await response.json()
        listDescription = json.description
        listName = json.name
        totalMovies = totalMovies.concat(json.results)
        if (json.page < json.total_pages) {
          flexURL = `${baseURL}&page=${json.page + 1}`
        } else {
          resolved = true
        }
      }
    } catch (err) {
      alert(err) // TypeError: failed to fetch
    }

    this.setState({
      isLoaded: true,
      listDescription,
      listId,
      listName,
      movies: totalMovies,
      filteredMovies: totalMovies,
    })
  }

  async editListId(event) {
    const listId = event.currentTarget.value
    this._loadMovies(listId)
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
          <TopBar
            editListId={this.editListId}
            listId={this.state.listId}
            listName={this.state.listName}
          />
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
                    filteredMovies,
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
          <WelcomeDialog />
        </AppContainer>
      </MuiThemeProvider>
    )
  }
}

export default MoviePicker
