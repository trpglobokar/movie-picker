import React, { Component } from "react"
import styled from "styled-components"
import { Button, Dialog, DialogTitle, Fab } from "@material-ui/core"

const RecommendedWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`
const RecommendedContent = styled.div`
  min-width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8px;
  padding-bottom: 24px;
`
const SuperFab = styled(Fab)`
  position: fixed;
  bottom: 16px;
  right: 16px;
`
const ImageContainer = styled.div`
  height: 300px;
  width: 320px;
  background-image: url(https://image.tmdb.org/t/p/w370_and_h556_bestv2${props => props.posterPath});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 15px;
`
const SuperButton = styled(Button)`
  margin: 8px;
`

class RandomSelect extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recommendedMovie: "",
      modalOpen: false,
    }
  }

  handleClick = _event => {
    let movies = this.props.filteredMovies

    const newMovie =
      movies[Math.floor(Math.random() * Math.floor(movies.length))]

    this.setState({
      recommendedMovie: newMovie,
      modalOpen: true,
    })
  }

  handleClose = _event => {
    this.setState({
      recommendedMovie: "",
      modalOpen: false,
    })
  }

  render() {
    const { modalOpen, recommendedMovie } = this.state

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
            Recommended Movie: {recommendedMovie.title}
          </DialogTitle>
          <RecommendedContent>
            <ImageContainer posterPath={recommendedMovie.poster_path} />
            <SuperButton
              variant="contained"
              color="primary"
              onClick={this.handleClick}
            >
              Give me another
            </SuperButton>
          </RecommendedContent>
        </Dialog>
      </RecommendedWrapper>
    )
  }
}

export default RandomSelect
