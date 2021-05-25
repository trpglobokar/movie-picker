import React, { FunctionComponent } from "react"
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core"
import styled from "styled-components"

import movieGenresJson from "../static/movieGenres.json"

const ListCaptain = styled(List)`
  height: 100%;
  overflow: scroll;
`

interface AllMoviesProps {
  movies: {
    id: string,
    title: string,
    backdrop_path: string,
    genre_ids: string[]
  }[]; //TODO: make movies its own interface in a utils file
}

const movieGenres:any = movieGenresJson;

const AllMovies:FunctionComponent<AllMoviesProps> = ({ movies }) => {
  return (
    <ListCaptain>
      {movies.map(movie => {
        const genreIDs = movie.genre_ids
        const genreNames = genreIDs.map(id => movieGenres[id])

        return (
          <ListItem key={movie.id} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                src={
                  "https://image.tmdb.org/t/p/w92/" +
                  movie.backdrop_path
                }
              />
            </ListItemAvatar>
            <ListItemText
              primary={movie.title}
              secondary={genreNames.join(", ")}
            />
          </ListItem>
        )
      })}
    </ListCaptain>
  )
}

export default AllMovies;
