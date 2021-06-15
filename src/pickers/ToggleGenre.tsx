import React, { FunctionComponent } from 'react'
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Typography } from '@material-ui/core'

import movieGenresJson from '../static/movieGenres.json';

import styled from "styled-components"
import { useAppSelector, useAppDispatch } from '../utils/hooks';
import { selectFilteredGenres, updateSelectedGenres } from '../utils/Filters';

const SuperFormGroup = styled(FormGroup)`
  flex-direction: row!important;
`
const SuperFormControlLabel = styled(FormControlLabel)`
  min-width: 160px;
`

const movieGenres:any = movieGenresJson; //TODO: make this an enum and remove the parseInts

const ToggleGenre:FunctionComponent = () => {
  const selectedGenres = useAppSelector(selectFilteredGenres);
  const dispatch = useAppDispatch();

  const renderGenreList = () => {  
    return (
      <SuperFormGroup>
        {Object.keys(movieGenres).map((id: string) =>
          <SuperFormControlLabel
            key={id}
            control={
              <Checkbox
                checked={selectedGenres.includes(parseInt(id))}
                onChange={() => dispatch(updateSelectedGenres(parseInt(id)))}
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
