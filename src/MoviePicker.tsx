import * as React from "react";
import {
  CircularProgress,
  //Grid,
  Typography,
} from "@material-ui/core"
import { MuiThemeProvider, createMuiTheme } from "@material-ui/core/styles"
import styled from "styled-components"

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
      isLoaded: false,
      recommendedMovie: "",
      seenBy: ["Jake", "Rocky"],
      selectedGenres: [],
      selectedRating: 1,
      movies: [],
      filteredMovies: [],
    };
  }


  render() {
    if (!this.state.isLoaded) {
      return (
        <MuiThemeProvider theme={theme}>
          <CenterFlex>
            <LoadingText>Loading...</LoadingText>
            <CircularProgress />
          </CenterFlex>
        </MuiThemeProvider>
      )
    }
  }
}