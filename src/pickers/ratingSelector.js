import React, { Component } from 'react'
import Slider from '@material-ui/lab/Slider';
import { Typography } from "@material-ui/core"
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
        <Typography variant="h6">Minimum Rating: {selectedRating}/10</Typography>
        <br />
        <Slider
          value={selectedRating}
          onChange={(_event, value) => {
            setRating(value)
            }
          }
          step={0.5}
          min={1}
          max={10}
        />
      </RatingWrapper>
    )
  }
}

export default RatingSelector
