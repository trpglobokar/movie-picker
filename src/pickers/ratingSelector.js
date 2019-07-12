import React, { Component } from "react"
import { Slider, Typography } from "@material-ui/core"
import styled from "styled-components"

const RatingWrapper = styled.div`
  margin-bottom: 32px;
`

class RatingSelector extends Component {
  //TODO: figure out how to make range; possible custom component? IDEK
  render() {
    const { selectedRating, setRating } = this.props
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
            setRating(value)
          }}
          step={0.5}
          marks
          min={1}
          max={10}
        />
      </RatingWrapper>
    )
  }
}

export default RatingSelector
