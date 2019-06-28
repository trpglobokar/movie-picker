import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import AllMovies from './allmovies'
import ToggleSeenBy from './toggleSeenBy'
import './App.css';
import styled from 'styled-components'

import Button from '@material-ui/core/Button';

import movieList from './customData.json';

const AppContainer = styled.div`
  background: #144665;
`

const FullLengthPaper = styled(Paper)`
  height: 100vh;
`

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoaded: false,
      recommendedMovie: "",
      seenBy: ["Jake", "Rocky"],
    }

  }

  componentDidMount() {
    fetch("https://api.themoviedb.org/4/list/108073?api_key=43a2c46891bb2b3bb8fccd7b04ce1f02&language=en-US")
      .then(res => res.json())
      .then(
        (result) => {

          const movies = result.results.map(movie => {
            movie.seenBy = result.comments["movie:" + movie.id]
            return movie
          })

          this.setState({
            isLoaded: true,
            movies: movies,
            filteredMovies: movies,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  handleClick = event => {
    let movies = this.state.filteredMovies

    const newMovie = movies[Math.floor(Math.random() * Math.floor(movies.length))]
    console.log("this", this)

    this.setState({"recommendedMovie": newMovie})
  }

  toggleSeenBy = event => {
    const toggleBy = event.currentTarget.value

    let currentSeenBy = this.state.seenBy

    if (currentSeenBy.includes(toggleBy)){
      currentSeenBy = currentSeenBy.filter(csb => csb !== toggleBy)
    } else {
      currentSeenBy.push(toggleBy)
    }

    let filteredMovies = this.state.movies.filter(movie => currentSeenBy.includes(movie.seenBy))


    this.setState({"seenBy": currentSeenBy, "filteredMovies": filteredMovies})
  }


  render() {
    console.log("this", this)
    if(!this.state.isLoaded){
      return (<div>Loading...</div>)
    }

    return (
      <AppContainer>
        <Grid container spacing={16}>
          <Grid item xs={3}>
            <FullLengthPaper>
              <ToggleSeenBy
                seenBy={this.state.seenBy}
                toggleSeenBy={this.toggleSeenBy}
              />
            </FullLengthPaper>
          </Grid>
          <Grid item xs={6}>
            <FullLengthPaper>
              <Button  variant="contained" color="primary" onClick={this.handleClick}>
                Activate Lasers
              </Button>
              <br />
              <br />

              <div>THE RECOMMENDED MOVIE</div>
              <div style={{"height": "556px", "width": "370px", "backgroundImage": "url(https://image.tmdb.org/t/p/w370_and_h556_bestv2" + this.state.recommendedMovie.poster_path+")"}} />
              <div>{this.state.recommendedMovie.title}</div>
            </FullLengthPaper>
          </Grid>
          <Grid item xs={3}>
            <FullLengthPaper>
              <AllMovies movies={this.state.filteredMovies} />
            </FullLengthPaper>
          </Grid>
        </Grid>
      </AppContainer>
    )
  }
}

export default withStyles(styles)(App);