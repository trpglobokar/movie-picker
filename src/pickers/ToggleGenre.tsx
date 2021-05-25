import React, { FunctionComponent } from 'react'
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
const SuperFormControlLabel = styled(FormControlLabel)`
  min-width: 160px;
`

interface TGProps {
  selectedGenres: string[];
  toggleGenre: (genreId: string) => void;
}

const movieGenres:any = movieGenresJson;

const ToggleGenre:FunctionComponent<TGProps> = ({ selectedGenres, toggleGenre }) => {
  const renderGenreList = () => {  
    return (
      <SuperFormGroup>
        {Object.keys(movieGenres).map((id: string) =>
          <SuperFormControlLabel
            key={id}
            control={
              <Checkbox
                checked={selectedGenres.includes(id)}
                onChange={() => { toggleGenre(id) }}
                value={id}
              />
            }
            label={movieGenres[id]}
          />
        )}
      </SuperFormGroup>
    );
  }

  return (
    <div>
      <FormControl component="fieldset">
        <Typography variant="h6">Genres</Typography>
        {renderGenreList()}
      </FormControl>
    </div>
  )
};

export default ToggleGenre;
