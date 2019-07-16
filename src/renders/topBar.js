import React, { Component } from "react"
import styled from "styled-components"
import { AppBar, Button, Dialog, DialogTitle, FormControlLabel, IconButton, MenuIcon, Radio, RadioGroup, Toolbar, Typography } from "@material-ui/core"
import Edit from '@material-ui/icons/Edit'

const RecommendedWrapper = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`
const DialogContent = styled.div`
  min-width: 500px;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 8px;
  padding-bottom: 24px;
`
const ImageContainer = styled.div`
  height: 300px;
  width: 320px;
  background-image: url(https://image.tmdb.org/t/p/w370_and_h556_bestv2${props => props.posterPath});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  margin-bottom: 15px;
`
const SuperButton = styled(Button)`
  margin: 8px;
`

class RandomSelect extends Component {
  constructor(props) {
    super(props)

    this.state = {
      modalOpen: false
    }
  }

  handleClick = _event => {
    this.setState({
      modalOpen: true
    })
  }

  handleClose = _event => {
    this.setState({
      modalOpen: false
    })
  }

  renderSampleLists(){
    const { editListId, listId } = this.props
    const hardCodedListIds = ["108073","108351"]
    return hardCodedListIds.map(hcId => {
      return (
        <FormControlLabel
          key={hcId}
          control={
            <Radio
              checked={listId === hcId}
              onChange={editListId}
              value={hcId}

            />
          }
          label={hcId}
        />
      )
    })

  }

  render() {
    const { modalOpen, recommendedMovie } = this.state

    return (
      <AppBar position="static" color="secondary">
        <Toolbar>
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
          <DialogTitle id="simple-dialog-title">
            Edit Stuff
          </DialogTitle>
          <DialogContent>
            {this.renderSampleLists()}
          </DialogContent>
        </Dialog>
      </AppBar>
    )
  }
}

export default RandomSelect
