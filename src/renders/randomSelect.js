import React, { Component } from "react"
import styled from "styled-components"
import Dialog from '@material-ui/core/Dialog'
import DialogTitle from '@material-ui/core/DialogTitle'
import Button from "@material-ui/core/Button"
import Fab from '@material-ui/core/Fab'

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
const SuperButton = styled(Button)`
  margin: 8px;
`

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      recommendedMovie: "",
      modalOpen: false
    }
  }

  handleClick = _event => {
    let movies = this.props.filteredMovies

    const newMovie =
      movies[Math.floor(Math.random() * Math.floor(movies.length))]

    this.setState({
      recommendedMovie: newMovie,
      modalOpen: true
    })
  }

  handleClose = _event => {
    this.setState({
      recommendedMovie: "",
      modalOpen: false
    })
  }

  render() {
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
          open={this.state.modalOpen}
        >
          <DialogTitle id="simple-dialog-title">
            Recommended Movie: {this.state.recommendedMovie.title}
          </DialogTitle>
          <div
            style={{
              minWidth: "500px",
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              padding: "8px"
            }}
          >
            <div
              style={{
                height: "400px",
                width: "320px",
                backgroundImage:
                  "url(https://image.tmdb.org/t/p/w370_and_h556_bestv2" +
                  this.state.recommendedMovie.poster_path +
                  ")",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain"
              }}
            />
            <SuperButton
              variant="contained"
              color="primary"
              onClick={this.handleClick}
            >
              Give me another
            </SuperButton>
          </div>
        </Dialog>
      </RecommendedWrapper>
    )
  }
}

export default App
