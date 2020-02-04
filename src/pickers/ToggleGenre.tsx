import React, { Component } from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core'

import movieGenresJson from '../static/movieGenres.json';

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

interface TGProps {
  selectedGenres: string[];
  toggleGenre: (genreId: string) => void;
}

const movieGenres:any = movieGenresJson

class ToggleGenre extends Component<TGProps> {
  constructor(props: TGProps) {
    super(props);
  }

  renderFormGroup() {
    //TODONEXT: adapt this from obj to array
    const jones = Object.keys(movieGenres).map((id: string) => {
      return (
        <SuperFormControlLabel
          key={id}
          control={
            <Checkbox
              checked={this.props.selectedGenres.includes(id)}
              onChange={() => { this.props.toggleGenre(id) }}
              value={id}

            />
          }
          label={movieGenres[id]}
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
    return (
      <div>
        <FormControl component="fieldset">
          <Typography variant="h6">Genres</Typography>
          {this.renderFormGroup()}
        </FormControl>
      </div>
    )
  }
}

export default ToggleGenre
