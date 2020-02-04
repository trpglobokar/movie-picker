import * as React from "react";
import {
  CircularProgress,
  Grid,
  Typography,
} from "@material-ui/core"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import styled from "styled-components"

import TopBar from "./renders/TopBar"
import WelcomeDialog from "./renders/WelcomeDialog"
import AllMovies from "./renders/AllMovies"
import RandomSelect from "./renders/RandomSelect"
import ToggleMaster from "./pickers/ToggleMaster"

const TMDB_API_KEY = process.env.REACT_APP_TMDB_API_KEY

const CenterFlex = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`
const LoadingText = styled(Typography)`
  margin-right: 16px !important;
`
const AppContainer = styled.div`
  height: 100%;
`
const MovieListWrapper = styled.div`
  margin: 16px 32px 0 32px;
  max-height: calc(100vh - 96px);
  overflow: scroll;
`


interface MPProps {
}

interface MPState {
  playOrPause?: string;
  listId: string;
  listName: string;
  listDescription: string;
  isLoaded: boolean;
  recommendedMovie: string;
  seenBy: string[];
  selectedGenres: any[]; //TODO: figure out what type this is
  selectedRating: number;
  movies: any[];
  filteredMovies: any[];
}

const theme = createMuiTheme({
  palette: {
    primary: { main: "#23B5D3", contrastText: "#FBFBFB" }, // Purple and green play nicely together.
    secondary: { main: "#071013", contrastText: "#FBFBFB" }, // This is just green.A700 as hex.
  },
  typography: {
    fontFamily: [
      "Khand",
      "Raleway",
      "typeface-roboto",
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
})

// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
export class MoviePicker extends React.Component<MPProps, MPState> {
  constructor(props: MPProps) {
    super(props);
    
    this.state = {
      listId: "108073",
      listName: "",
      listDescription: "",
      isLoaded: true,
      recommendedMovie: "",
      seenBy: ["Jake", "Rocky"],
      selectedGenres: [],
      selectedRating: 1,
      movies: [],
      filteredMovies: [],
    };
  }

  async componentDidMount() {
    const { listId } = this.state
    this._loadMovies(listId)
  }

  //TODO: move this to a utils file
  async _loadMovies(listId: string) {
    let totalMovies: any[] = []
    const baseURL: string = `https://api.themoviedb.org/4/list/${listId}?api_key=${TMDB_API_KEY}&language=en-US`
    let flexURL: string = baseURL
    let resolved: boolean = false
    let listDescription: string = ""
    let listName: string = ""

    try {
      while (!resolved) {
        let response = await fetch(flexURL)
        let json = await response.json()
        listDescription = json.description
        listName = json.name
        totalMovies = totalMovies.concat(json.results)
        if (json.page < json.total_pages) {
          flexURL = `${baseURL}&page=${json.page + 1}`
        } else {
          resolved = true
        }
      }
    } catch (err) {
      alert(err) // TypeError: failed to fetch
    }

    this.setState({
      isLoaded: true,
      listDescription,
      listId,
      listName,
      movies: totalMovies,
      filteredMovies: totalMovies, //TODO: filter this as well
    })
  }

  editListId = (listId: string) => {
    //this.setState({ listId })
    this._loadMovies(listId)
  }

  filterDaMovies(selectedGenres: any[], selectedRating: number) {
    const movies = this.state.movies
      .filter(movie => movie.vote_average > selectedRating)
      .filter(movie =>
        selectedGenres.every(genre => movie.genre_ids.includes(parseInt(genre)))
      )
    return movies
  }

  render() {
    if (!this.state.isLoaded) {
      return ( //TODO: break this into its own component
        <MuiThemeProvider theme={theme}>
          <CenterFlex>
            <LoadingText>Loading...</LoadingText>
            <CircularProgress />
          </CenterFlex>
        </MuiThemeProvider>
      )
    }
    return (
      <MuiThemeProvider theme={theme}>
        <AppContainer>
          <TopBar
            editListId={this.editListId}
            listId={this.state.listId}
            listName={this.state.listName}
          />
          <Grid container>
            <Grid item xs={4}>
              <ToggleMaster
                selectedRating={this.state.selectedRating}
                selectedGenres={this.state.selectedGenres}
                updateSelections={(selectedGenres:any[], selectedRating:number) => {
                  const filteredMovies = this.filterDaMovies(
                    selectedGenres,
                    selectedRating
                  )
                  this.setState({
                    selectedGenres,
                    selectedRating,
                    filteredMovies,
                  })
                }}
              />
            </Grid>
            <Grid item xs={8}>
              <MovieListWrapper>
                <AllMovies movies={this.state.filteredMovies} />
              </MovieListWrapper>
            </Grid>
          </Grid>
          <RandomSelect filteredMovies={this.state.filteredMovies} />
          <WelcomeDialog />
        </AppContainer>
      </MuiThemeProvider>
    )
  }

}