import React, { Component } from 'react'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

import movieGenres from './movieGenres.json';

class ToggleSeenBy extends Component {

  renderFormGroup(){
    const peepsInvolved = movieGenres.genres

    const jones = peepsInvolved.map(peep => {

      return (
        <FormControlLabel
          key={peep}
          control={
            <Checkbox
              checked={this.props.selectedGenres.includes(peep.id.toString())}
              onChange={this.props.toggleGenre}
              value={peep.id}
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
        <FormControl component="fieldset">
          <FormLabel component="legend">Genres</FormLabel>
          {this.renderFormGroup()}
        </FormControl>
      </div>
    )
  }
}

export default ToggleSeenBy
