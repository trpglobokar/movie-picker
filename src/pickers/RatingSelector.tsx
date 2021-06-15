import React, { FunctionComponent } from "react"
import { Slider, Typography } from "@material-ui/core"
import styled from "styled-components"

import { useAppSelector, useAppDispatch } from "../utils/hooks";
import { selectFilteredRating, changeRating } from "../utils/Filters";

const RatingWrapper = styled.div`
  margin-bottom: 32px;
`

const RatingSelector:FunctionComponent = () => {
  const selectedRating = useAppSelector(selectFilteredRating);
  const dispatch = useAppDispatch();

  return (
    <RatingWrapper>
      <Typography variant="h6">
        Minimum Rating: {selectedRating}/10
      </Typography>
      <br />
      <Slider
        defaultValue={selectedRating}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        onChange={(_event, value) => {
          if (Array.isArray(value)) { //TODO: clean this up
            dispatch(changeRating(value[0]))
          } else {
            dispatch(changeRating(value))
          }
        }}
        step={0.5}
        marks
        min={1}
        max={10}
      />
    </RatingWrapper>
  )
};

export default RatingSelector;
