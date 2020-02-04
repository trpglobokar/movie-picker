import React, { Component } from "react"
import styled from "styled-components"

import RatingSelector from "./RatingSelector"
import ToggleGenre from "./ToggleGenre"

const PickerWrapper = styled.div`
  height: calc(100vh - 96px);
  overflow: scroll;
  background-color: white;
  box-shadow: 0px 0px 20px #00000057;
  padding: 16px;
`

interface TMProps {
  selectedRating: number;
  selectedGenres: string[];
  updateSelections: (selectedGenres: string[], selectedRating: number) => void;
}

class ToggleMaster extends Component<TMProps> {
  constructor(props: TMProps) {
    super(props)
  }

  setGenre = (genreId: string) => {
    let newGenres = this.props.selectedGenres

    if (newGenres.includes(genreId)) {
      newGenres = newGenres.filter(g => g !== genreId)
    } else {
      newGenres.push(genreId)
    }

    this.props.updateSelections(
      newGenres,
      this.props.selectedRating
    )
  }

  setRating = (rating: number) => {
    this.props.updateSelections(
      this.props.selectedGenres,
      rating
    )
  }

  render() {
    return (
      <PickerWrapper>
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

export default ToggleMaster
