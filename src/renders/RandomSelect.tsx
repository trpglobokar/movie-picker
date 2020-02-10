import React, { Component } from "react"
import styled from "styled-components"
import {
  Button,
  Dialog,
  DialogTitle,
  Fab,
  Link,
  Typography,
} from "@material-ui/core"
import movieGenresJson from "../static/movieGenres.json"

const movieGenres:any = movieGenresJson

interface ICProps {
  posterPath: string;
}

const RecommendedWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`
const SuperFab = styled(Fab)`
  position: fixed;
  bottom: 16px;
  right: 16px;
`
const DialogContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 24px 24px 24px;
`
const RecommendedMovie = styled.div`
  display: flex;
  margin-bottom: 8px;
`
const ImageContainer = styled.div<ICProps>`
  height: 300px;
  width: 220px;
  background-image: url(https://image.tmdb.org/t/p/w370_and_h556_bestv2${props => props.posterPath});
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 16px;
`
const RecommendedInfo = styled.div`
  width: 75%;
`
const SuperButton = styled(Button)`
  margin: 8px !important;
` //TODO: make these re-usable + use MaterialUI's API to edit

interface RSProps {
  filteredMovies: any[];
}

interface RSState {
  recommendedMovie: { //TODO: make of type Movie
    id: string,
    title: string,
    backdrop_path: string,
    poster_path: string,
    release_date?: string,
    overview?: string,
    genre_ids: string[]
  };
  modalOpen: boolean;
}

class RandomSelect extends Component<RSProps, RSState> {
  constructor(props: RSProps) {
    super(props)

    this.state = {
      recommendedMovie: {
        id: "",
        title: "",
        poster_path: "",
        backdrop_path: "",
        genre_ids: [],
      },
      modalOpen: false,
    }
  }

  handleClick = () => {
    let movies = this.props.filteredMovies

    const newMovie =
      movies[Math.floor(Math.random() * Math.floor(movies.length))]

    this.setState({
      recommendedMovie: newMovie,
      modalOpen: true,
    })
  }

  handleClose = () => {
    this.setState({
      recommendedMovie: {
        id: "",
        title: "",
        poster_path: "",
        backdrop_path: "",
        genre_ids: [],
      },
      modalOpen: false,
    })
  }

  render() {
    const { modalOpen, recommendedMovie } = this.state
    const tmdbURL = `https://www.themoviedb.org/movie/${recommendedMovie.id}`
    const genreNames = recommendedMovie.genre_ids
      .map(id => movieGenres[id])
      .join(", ")
    console.log("recommendedMovie", recommendedMovie)

    return (
      <RecommendedWrapper>
        <SuperFab
          color="primary"
          variant="extended"
          aria-label="Choose for Me"
          onClick={this.handleClick}
        >
          Choose for Me
        </SuperFab>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
          open={modalOpen}
        >
          <DialogTitle id="simple-dialog-title">
            Recommended Movie:{" "}
            <Link href={tmdbURL} rel="noopener noreferrer" target="_blank">
              {recommendedMovie.title}
            </Link>
          </DialogTitle>
          <DialogContent>
            <RecommendedMovie>
              <ImageContainer posterPath={recommendedMovie.poster_path} />
              <RecommendedInfo>
                <Typography>
                  <b>Release Date:</b> {recommendedMovie.release_date}
                </Typography>
                <Typography>
                  <b>Genres:</b> {genreNames}
                </Typography>
                <Typography>
                  <b>Description:</b> {recommendedMovie.overview}
                </Typography>
              </RecommendedInfo>
            </RecommendedMovie>
            <SuperButton
              variant="contained"
              color="primary"
              onClick={this.handleClick}
            >
              Give me another
            </SuperButton>
          </DialogContent>
        </Dialog>
      </RecommendedWrapper>
    )
  }
}

export default RandomSelect
