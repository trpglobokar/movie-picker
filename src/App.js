import React, { Component } from "react"
import { withStyles } from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid"
import Paper from "@material-ui/core/Paper"
import AllMovies from "./allmovies"
import ToggleMaster from "./pickers/toggleMaster"
import "./App.css"
import styled from "styled-components"

import RandomSelect from "./randomSelect"

const AppContainer = styled.div`
  background: #7ec5b4;
  height: 100vh;
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

class MoviePicker extends Component {
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
      <AppContainer>
        <Grid container spacing={16}>
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
              <h2>Movie List</h2>
              <Paper>
                <AllMovies movies={this.state.filteredMovies} />
              </Paper>
            </MovieListWrapper>
          </Grid>
        </Grid>
        <RandomSelect
            filteredMovies={this.state.filteredMovies}
        />
      </AppContainer>
    )
  }
}

export default withStyles(styles)(MoviePicker)
