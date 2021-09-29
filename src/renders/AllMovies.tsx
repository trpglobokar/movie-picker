import React, { FunctionComponent } from "react";
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@material-ui/core";
import styled from "styled-components";

import movieGenresJson from "../static/movieGenres.json";
import { useAppSelector } from "../utils/hooks";
import { selectFilteredMovies } from "../utils/Filters";

const ListCaptain = styled(List)`
  height: 100%;
  overflow: scroll;
`;

const movieGenres: any = movieGenresJson;

const AllMovies: FunctionComponent = () => {
  const filteredMovies = useAppSelector(selectFilteredMovies);

  return (
    <ListCaptain>
      {filteredMovies.map((movie) => {
        const genreIDs = movie.genre_ids;
        const genreNames = genreIDs.map((id) => movieGenres[id]);

        return (
          <ListItem key={movie.id} alignItems="flex-start">
            <ListItemAvatar>
              <Avatar
                src={"https://image.tmdb.org/t/p/w92/" + movie.backdrop_path}
              />
            </ListItemAvatar>
            <ListItemText
              primary={movie.title}
              secondary={genreNames.join(", ")}
            />
          </ListItem>
        );
      })}
    </ListCaptain>
  );
};

export default AllMovies;
