import React, { Component } from "react"
import styled from "styled-components"
import {
  AppBar,
  Dialog,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Radio,
  Toolbar,
  Typography,
} from "@material-ui/core"
import Edit from "@material-ui/icons/Edit"

const defaultLists = [
  {
    id: "43",
    name: "AFI's 100 Most Thrilling American Films",
  },
  {
    id: "338",
    name: "Disney Classic Collection",
  },
  {
    id: "932",
    name: "Girls With Guns",
  },
  {
    id: "2469",
    name: "Best Picture Winners - The Golden Globes",
  },
  {
    id: "3321",
    name: "Anime Movies",
  },
  {
    id: "3845",
    name: "Good Science Fiction Flicks",
  },
  {
    id: "108073",
    name: "Rocky's Recommended Movies",
  },
  {
    id: "108351",
    name: "Rocky's To Watch List",
  },
]

const AppTitle = styled(Typography)`
  flex-grow: 1;
`
const DialogContent = styled.div`
  min-width: 500px;
  display: flex;
  flex-direction: column;
  padding: 0 24px 24px 24px;
`

class TopBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalOpen: false,
      defaultLists: defaultLists,
    }
  }

  async componentDidMount() {
    //TODO: pull default lists from accountId
    /*const accountId = "trpglobokar"
    const baseURL = `https://api.themoviedb.org/4/account/${accountId}/lists?api_key=${API_KEY}`
    let response = await fetch(baseURL)
    let json = await response.json()
    console.log("json", json)*/
  }

  handleClick = _event => {
    this.setState({
      modalOpen: true,
    })
  }

  handleClose = _event => {
    this.setState({
      modalOpen: false,
    })
  }

  renderSampleLists() {
    const { editListId, listId } = this.props
    const { defaultLists } = this.state

    return defaultLists.map(list => {
      return (
        <FormControlLabel
          key={list.id}
          control={
            <Radio
              checked={listId === list.id}
              onChange={editListId}
              value={list.id}
            />
          }
          label={list.name}
        />
      )
    })
  }

  render() {
    const { modalOpen } = this.state

    return (
      <AppBar position="static" color="secondary">
        <Toolbar>
          <AppTitle variant="h6" color="inherit">
            Movie Picker
          </AppTitle>
          <Typography variant="h6" color="inherit">
            {this.props.listName}
          </Typography>
          <IconButton
            aria-label="EditList"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={this.handleClick}
            color="inherit"
          >
            <Edit />
          </IconButton>
        </Toolbar>
        <Dialog
          onClose={this.handleClose}
          aria-labelledby="simple-dialog-title"
          open={modalOpen}
        >
          <DialogTitle id="simple-dialog-title">Change Movie List</DialogTitle>
          <DialogContent>{this.renderSampleLists()}</DialogContent>
        </Dialog>
      </AppBar>
    )
  }
}

export default TopBar
