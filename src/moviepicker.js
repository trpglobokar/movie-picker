import React from "react"
//import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import AllMovies from "./renders/allmovies"
import ToggleMaster from "./pickers/toggleMaster"
import "./static/app.css"
import styled from "styled-components"

import RandomSelect from "./renders/randomSelect"

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import './static/fonts.css'
import { Typography } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#3B7080" }, // Purple and green play nicely together.
    secondary: { main: "#ADE25D" }, // This is just green.A700 as hex.
  },
  typography: {
    fontFamily: [
      'Raleway',
      'typeface-roboto',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    useNextVariants: true
  },
});

const AppContainer = styled.div`
  height: 100%;
`

const MovieListWrapper = styled.div`
  margin: 32px;
  max-height: calc(100vh - 64px);
  overflow: scroll;
`

/*const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
})*/

class MoviePicker extends React.Component {
//export default function MoviePicker() {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      recommendedMovie: "",
      seenBy: ["Jake", "Rocky"],
      selectedGenres: [],
      selectedRating: 1,
      movies: [],
      filteredMovies: [],
    }
  }

  async componentDidMount () {
    let totalMovies = []
    let url = "https://api.themoviedb.org/4/list/108073?api_key=43a2c46891bb2b3bb8fccd7b04ce1f02&language=en-US"

    const response = await fetch(url);
    const json = await response.json();
    totalMovies = totalMovies.concat(json.results)
    this.setState({
      isLoaded: true,
      movies: totalMovies,
      filteredMovies: totalMovies
    })

    //TODO: make this looped, not hardcoded
    /*fetch(url, {
      method: 'get',
    }).then(function(response) {
      return response.json(); // pass the data as promise to next then block
    }).then(function(data) {
      totalMovies = totalMovies.concat(data.results)
      return fetch(url+"&page=2")
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      totalMovies = totalMovies.concat(data.results)
      this2.setState({
        isLoaded: true,
        movies: totalMovies,
        filteredMovies: totalMovies
      })
    })
    .catch(function(error) {
      console.log('Request failed', error)
    })*/
  }

  filterDaMovies(selectedGenres, selectedRating){
    const movies = this.state.movies
      .filter(movie =>
        movie.vote_average > selectedRating
      )
      .filter(movie =>
        selectedGenres.every(genre => movie.genre_ids.includes(parseInt(genre)))
      )
    return movies
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    }

    return (
      <MuiThemeProvider theme={theme}>
      <AppContainer>
        <Grid container>
          <Grid item xs={4}>
            <ToggleMaster
              selectedRating={this.state.selectedRating}
              selectedGenres={this.state.selectedGenres}
              updateSelections={(selectedGenres, selectedRating) => {
                const filteredMovies = this.filterDaMovies(selectedGenres, selectedRating)

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
              <Typography variant="h4">Movie List</Typography>
              <AllMovies movies={this.state.filteredMovies} />
            </MovieListWrapper>
          </Grid>
        </Grid>
        <RandomSelect
          filteredMovies={this.state.filteredMovies}
        />
      </AppContainer>
      </MuiThemeProvider>
    )
  }
}

export default MoviePicker

//export default withStyles(styles)(MoviePicker)
