import * as React from "react"
import styled from "styled-components"
import {
  AppBar,
  Button,
  Dialog,
  DialogTitle,
  FormControlLabel,
  IconButton,
  Radio,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core"
import Edit from "@material-ui/icons/Edit"
import defaultLists from "../static/defaultLists.json"

const AppTitle = styled(Typography)`
  flex-grow: 1;
`
const DialogContent = styled.div`
  min-width: 500px;
  display: flex;
  flex-direction: column;
  padding: 0 24px 24px 24px;
`
const SuperButton = styled(Button)`
  margin: 8px !important;
` //TODO: make these re-usable + use MaterialUI's API to edit

interface TopBarProps {
  editListId: (listId: string) => void;
  listId: string;
  listName: string;
}

interface TopBarState {
  modalOpen: boolean;
  defaultLists: any; //TODO: make this specific
  tempListId: string;
  customList: boolean;
}


class TopBar extends React.Component<TopBarProps, TopBarState> {
  constructor(props: TopBarProps) {
    super(props)

    this.state = {
      modalOpen: false,
      defaultLists: defaultLists.lists,
      tempListId: this.props.listId,
      customList: false,
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

  handleClick = () => {
    this.setState({
      modalOpen: true,
    })
  }

  handleClose = () => {
    this.setState({
      modalOpen: false,
    })
  }

  handleListChange = () => {
    this.props.editListId(this.state.tempListId)
    this.handleClose();
  }

  renderSampleLists() {
    //const { editListId, listId } = this.props
    const { tempListId, defaultLists } = this.state

    return defaultLists.map((list:any) => {
      return (
        <FormControlLabel
          key={list.id}
          control={
            <Radio
              checked={tempListId === list.id}
              onChange={() => this.setState({
                customList: false,
                tempListId: list.id
              })}
              value={list.id}
            />
          }
          label={list.name}
        />
      )
    })
  }

  render() {
    const { customList, modalOpen, tempListId } = this.state

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
          <DialogContent>
            {this.renderSampleLists()}
            <FormControlLabel
              key="customList"
              control={
                <Radio
                  checked={customList === true}
                  onChange={() => this.setState({
                    customList: true,
                    tempListId: ""
                  })}
                  value={""}
                />
              }
              label="Custom List"
            />
            {customList && (
              <TextField
                id="outlined-basic"
                label="Custom List Id"
                variant="outlined"
                onChange={(e) => this.setState({
                  tempListId: e.target.value
                })}
              />
            )}
            <SuperButton
              variant="contained"
              color="primary"
              onClick={this.handleListChange}>
                Change
            </SuperButton>
          </DialogContent>
        </Dialog>
      </AppBar>
    )
  }
}

export default TopBar
