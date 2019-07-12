import React, { Component } from "react"
import RatingSelector from "./ratingSelector"
//import ToggleSeenBy from "./pickers/toggleSeenBy"
import ToggleGenre from "./toggleGenre"
import styled from "styled-components"

const PickerWrapper = styled.div`
  height: calc(100vh - 32px);
  overflow: scroll;
  background-color: white;
  box-shadow: 0px 0px 20px #00000057;
  padding: 16px;
`

class App extends Component {

  componentDidMount() {
  }

  /*toggleSeenBy = event => {
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
  }*/

  setGenre = event => {
    const toggleBy = event.currentTarget.value

    let newGenres = this.props.selectedGenres
    if (newGenres.includes(toggleBy)) {
      newGenres = newGenres.filter(g => g !== toggleBy)
    } else {
      newGenres.push(toggleBy)
    }

    this.props.updateSelections(
      newGenres,
      this.props.selectedRating
    )
  }

  setRating = newRating => {
    this.props.updateSelections(
      this.props.selectedGenres,
      newRating
    )
  }

  render() {
    return (
      <PickerWrapper>
        {/*<ToggleSeenBy
          seenBy={this.state.seenBy}
          toggleSeenBy={this.toggleSeenBy}
        />*/}
        <RatingSelector
          selectedRating={this.props.selectedRating}
          setRating={this.setRating}
        />
        <ToggleGenre
          selectedGenres={this.props.selectedGenres}
          toggleGenre={this.setGenre}
          />
      </PickerWrapper>
    )
  }
}

export default App
