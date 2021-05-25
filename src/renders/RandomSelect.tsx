import React, { FunctionComponent, useState } from "react"
import styled from "styled-components"
import {
  Button,
  Dialog,
  DialogTitle,
  Fab,
  Link,
  Typography,
} from "@material-ui/core"
import movieGenresJson from "../static/movieGenres.json"

const movieGenres:any = movieGenresJson;

interface ICProps {
  posterPath: string;
}

const RecommendedWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`
const SuperFab = styled(Fab)`
  position: fixed;
  bottom: 16px;
  right: 16px;
`
const DialogContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 24px 24px 24px;
`
const RecommendedMovie = styled.div`
  display: flex;
  margin-bottom: 8px;
`
const ImageContainer = styled.div<ICProps>`
  height: 300px;
  width: 220px;
  background-image: url(https://image.tmdb.org/t/p/w370_and_h556_bestv2${props => props.posterPath});
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
  margin-right: 16px;
`
const RecommendedInfo = styled.div`
  width: 75%;
`
const SuperButton = styled(Button)`
  margin: 8px;
`

interface RSProps {
  filteredMovies: any[];
}

const RandomSelect:FunctionComponent<RSProps> = ({ filteredMovies }) => {
  const randomMovie =
    filteredMovies[Math.floor(Math.random() * Math.floor(filteredMovies.length))];

  const [recommendedMovie, setRecommendedMovie] = useState(randomMovie);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleChooseClick = () => {
    const randomMovie =
      filteredMovies[Math.floor(Math.random() * Math.floor(filteredMovies.length))];
    
    setIsModalOpen(true);
    setRecommendedMovie(randomMovie);
  };

  //TODO: break into separate component
  const renderDialog = () => {
    if (!recommendedMovie) { return null };

    const tmdbURL = `https://www.themoviedb.org/movie/${recommendedMovie.id}`;
    const genreNames = recommendedMovie.genre_ids
      .map((id: React.ReactText) => movieGenres[id])
      .join(", ");

    return (
      <Dialog
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="simple-dialog-title"
        open={isModalOpen}
      >
        <DialogTitle id="simple-dialog-title">
          Recommended Movie:{" "}
          <Link href={tmdbURL} rel="noopener noreferrer" target="_blank">
            {recommendedMovie.title}
          </Link>
        </DialogTitle>
        <DialogContent>
          <RecommendedMovie>
            <ImageContainer posterPath={recommendedMovie.poster_path} />
            <RecommendedInfo>
              <Typography>
                <b>Release Date:</b> {recommendedMovie.release_date}
              </Typography>
              <Typography>
                <b>Genres:</b> {genreNames}
              </Typography>
              <Typography>
                <b>Description:</b> {recommendedMovie.overview}
              </Typography>
            </RecommendedInfo>
          </RecommendedMovie>
          <SuperButton
            variant="contained"
            color="primary"
            onClick={handleChooseClick}
          >
            Give me another
          </SuperButton>
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <RecommendedWrapper>
      <SuperFab
        color="primary"
        variant="extended"
        aria-label="Choose for Me"
        onClick={handleChooseClick}
      >
        Choose for Meeee
      </SuperFab>
      {renderDialog()}
    </RecommendedWrapper>
  );
}

export default RandomSelect;
