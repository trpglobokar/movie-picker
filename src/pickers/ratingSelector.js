import React, { Component } from 'react'
import Slider from '@material-ui/lab/Slider';

class RatingSelector extends Component {

  render() {
    console.log("this.props", this.props)
    return (
      <div>
        <br />
        Minimum Rating
        <Slider
          defaultValue={1}
          onChange={(_event, value) => {
            this.props.setRating(value)
            }
          }
          //getAriaValueText={valuetext}
          aria-labelledby="discrete-slider"
          valueLabelDisplay="auto"
          step={0.5}
          marks
          min={1}
          max={10}
        />
      </div>
    )
  }
}

export default RatingSelector
