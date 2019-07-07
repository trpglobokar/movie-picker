import React, { Component } from 'react'
import Slider from '@material-ui/lab/Slider';

class RatingSelector extends Component {

  //TODO: figure out how to make range; possible custom component? IDEK 
  render() {
    const { selectedRating, setRating } = this.props
    return (
      <div>
        <br />
        Minimum Rating: {selectedRating}
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
      </div>
    )
  }
}

export default RatingSelector
