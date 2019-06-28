import React, { Component } from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import movieGenres from './movieGenres.json';


class AllMovies extends Component {
  constructor(props) {
    super(props)
    console.log("movieGenres", movieGenres)
  }

  render() {

    return (
      <List>
        FULL MOVIE LIST
        {this.props.movies.map(movie => {
          const genreIDs = movie.genre_ids
          const genreNames = genreIDs.map(id => movieGenres.genres.find(genre => genre.id === id).name)

          return (
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar src={"https://image.tmdb.org/t/p/w370_and_h556_bestv2" + movie.backdrop_path} />
              </ListItemAvatar>
              <ListItemText
                primary={movie.title}
                secondary={genreNames.join(", ")}
              />
            </ListItem>
          )
        })}
      </List>
    )
  }
}

export default AllMovies
