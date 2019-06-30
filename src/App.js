import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import AllMovies from "./allmovies"
import RatingSelector from "./pickers/ratingSelector"
import ToggleSeenBy from "./pickers/toggleSeenBy"
import ToggleGenre from "./pickers/toggleGenre"
import "./App.css"
import styled from "styled-components"

import Button from "@material-ui/core/Button"

const AppContainer = styled.div`
  background: #7ec5b4;
  height: 100vh;
`

const GridCaptain = styled(Grid)`
`

const FullLengthPaper = styled(Paper)`
`
const PickerWrapper = styled.div`
  height: 100vh;
  overflow: scroll;
  background-color: white;
  box-shadow: 0px 0px 20px #00000057;
  padding: 16px;
`

const MovieListWrapper = styled.div`
  margin: 32px;
  max-height: calc(100vh - 64px);
  overflow: scroll;
`

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary
  }
})

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      recommendedMovie: "",
      seenBy: ["Jake", "Rocky"],
      selectedGenres: [],
      selectedRating: 1
    }
  }

  componentDidMount() {
    let totalMovies = []
    let url = "https://api.themoviedb.org/4/list/108073?api_key=43a2c46891bb2b3bb8fccd7b04ce1f02&language=en-US"
    const this2 = this

    //TODO: make this looped, not hardcoded
    fetch(url, {
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
    })
  }

  handleClick = event => {
    let movies = this.state.filteredMovies

    const newMovie =
      movies[Math.floor(Math.random() * Math.floor(movies.length))]

    this.setState({ recommendedMovie: newMovie })
  }

  toggleSeenBy = event => {
    const toggleBy = event.currentTarget.value

    let currentSeenBy = this.state.seenBy

    if (currentSeenBy.includes(toggleBy)) {
      currentSeenBy = currentSeenBy.filter(csb => csb !== toggleBy)
    } else {
      currentSeenBy.push(toggleBy)
    }

    let filteredMovies = this.state.movies.filter(movie =>
      currentSeenBy.includes(movie.seenBy)
    )

    this.setState({ seenBy: currentSeenBy, filteredMovies: filteredMovies })
  }

  setGenre = event => {
    const toggleBy = event.currentTarget.value

    let newGenres = this.state.selectedGenres

    if (newGenres.includes(toggleBy)) {
      newGenres = newGenres.filter(g => g !== toggleBy)
    } else {
      newGenres.push(toggleBy)
    }

    const filteredMovies = this.filterDaMovies(newGenres, this.state.selectedRating)

    this.setState({
      selectedGenres: newGenres,
      filteredMovies: filteredMovies
    })
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

  setRating = newRating => {
    const filteredMovies = this.filterDaMovies(this.state.selectedGenres, newRating)

    this.setState({
      selectedRating: newRating,
      filteredMovies: filteredMovies
    })
  }

  render() {
    if (!this.state.isLoaded) {
      return <div>Loading...</div>
    }

    return (
      <AppContainer>
        <GridCaptain container spacing={16}>
          <Grid item xs={4}>
            <PickerWrapper>
            {/*<ToggleSeenBy
              seenBy={this.state.seenBy}
              toggleSeenBy={this.toggleSeenBy}
            />*/}
            <RatingSelector
              selectedRating={this.state.selectedRating}
              setRating={this.setRating}
            />
            <ToggleGenre
              selectedGenres={this.state.selectedGenres}
              toggleGenre={this.setGenre}
              />
            </PickerWrapper>
          </Grid>
          <Grid item xs={8}>
            <MovieListWrapper>
              <h2>Movie List</h2>
              <Paper>
                <AllMovies movies={this.state.filteredMovies} />
              </Paper>
            </MovieListWrapper>
          </Grid>
          {/* <Grid item xs={4}>
            <FullLengthPaper>
              <Button
                variant="contained"
                color="primary"
                onClick={this.handleClick}
              >
                Activate Lasers
              </Button>
              <br />
              <br />

              <div>THE RECOMMENDED MOVIE</div>
              <div
                style={{
                  height: "500px",
                  width: "320px",
                  backgroundImage:
                    "url(https://image.tmdb.org/t/p/w370_and_h556_bestv2" +
                    this.state.recommendedMovie.poster_path +
                    ")"
                }}
              />
              <div>{this.state.recommendedMovie.title}</div>
            </FullLengthPaper>
          </Grid> */}
        </GridCaptain>
      </AppContainer>
    )
  }
}

export default withStyles(styles)(App)
