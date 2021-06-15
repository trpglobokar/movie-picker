import React, { FunctionComponent, useState } from "react"
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
import defaultLists from "../static/defaultLists.json"
import { useAppSelector, useAppDispatch } from "../utils/hooks"
import { selectList, loadListByIdAsync } from "../utils/List"

const AppTitle = styled(Typography)`
  flex-grow: 1;
`
const DialogContent = styled.div`
  min-width: 500px;
  display: flex;
  flex-direction: column;
  padding: 0 24px 24px 24px;
`

const TopBar:FunctionComponent = () => {
  const selectableLists = defaultLists.lists; //TODO: add to state, make selectable based on user input

  const selectedList = useAppSelector(selectList);
  const dispatch = useAppDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <AppBar position="static" color="secondary">
      <Toolbar>
        <AppTitle variant="h6" color="inherit">Movie Picker</AppTitle>
        <Typography variant="h6" color="inherit">{selectedList.name}</Typography>
        <IconButton
          aria-label="EditList"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={() => setIsModalOpen(true)}
          color="inherit"
        >
          <Edit />
        </IconButton>
      </Toolbar>
      <Dialog
        onClose={() => setIsModalOpen(false)}
        aria-labelledby="simple-dialog-title"
        open={isModalOpen}
      >
        <DialogTitle id="simple-dialog-title">Change Movie List</DialogTitle>
        <DialogContent>
          {selectableLists.map((list:any) =>
            <FormControlLabel
              key={list.id}
              control={
                <Radio
                  checked={selectedList.id === list.id}
                  onChange={() => dispatch(loadListByIdAsync(list.id))}
                  value={list.id}
                />
              }
              label={list.name}
            />
          )}
        </DialogContent>
      </Dialog>
    </AppBar>
  )
}

export default TopBar
