import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core'

import movieGenres from '../static/movieGenres.json';

import styled from "styled-components"

const SuperFormGroup = styled(FormGroup)`
  flex-direction: row!important;
`
const SuperFormControl = styled(FormControl)`
  width: 100%;
`
const SuperFormControlLabel = styled(FormControlLabel)`
  min-width: 160px;
`

class ToggleGenre extends Component {

  renderFormGroup(){
    const peepsInvolved = movieGenres.genres
    const jones = peepsInvolved.map(peep => {
      return (
        <SuperFormControlLabel
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
      <SuperFormGroup>
        {jones}
      </SuperFormGroup>
    )
  }

  render() {
    console.log("this.props", this.props)
    return (
      <div>
        <SuperFormControl component="fieldset">
          <Typography variant="h6">Genres</Typography>
          {this.renderFormGroup()}
        </SuperFormControl>
      </div>
    )
  }
}

export default ToggleGenre
