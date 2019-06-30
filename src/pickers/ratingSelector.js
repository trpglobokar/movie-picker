import React, { Component } from 'react'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Slider from '@material-ui/lab/Slider';

import movieGenres from '../static-json/movieGenres.json';

class ToggleSeenBy extends Component {

  renderFormGroup(){
    const peepsInvolved = movieGenres.genres

    const jones = peepsInvolved.map(peep => {

      return (
        <FormControlLabel
          key={peep.id}
          control={
            <Checkbox
              checked={this.props.selectedGenres.includes(peep.id.toString())}
              onChange={this.props.toggleGenre}
              value={peep.id.toString()}
            />
          }
          label={peep.name}
        />
      )
    })

    return (
      <FormGroup>
        {jones}
      </FormGroup>
    )
  }

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

    return (
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Genres</FormLabel>
          {this.renderFormGroup()}
        </FormControl>
      </div>
    )
  }
}

export default ToggleSeenBy
