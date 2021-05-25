import React, { FunctionComponent } from "react"
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
  selectedGenres: string[];
  selectedRating: number;
  updateSelections: (selectedGenres: string[], selectedRating: number) => void;
}

const ToggleMaster:FunctionComponent<TMProps> = ({ selectedGenres, selectedRating, updateSelections }) => {
  const setGenre = (genreId: string) => {
    let newGenres = selectedGenres;

    if (newGenres.includes(genreId)) {
      newGenres = newGenres.filter(g => g !== genreId);
    } else {
      newGenres.push(genreId);
    }

    updateSelections(
      newGenres,
      selectedRating
    );
  };

  const setRating = (rating: number) => {
    updateSelections(
      selectedGenres,
      rating
    );
  };

  return (
    <PickerWrapper>
      <RatingSelector
        selectedRating={selectedRating}
        setRating={setRating}
      />
      <ToggleGenre
        selectedGenres={selectedGenres}
        toggleGenre={setGenre}
      />
    </PickerWrapper>
  )
};

export default ToggleMaster;
