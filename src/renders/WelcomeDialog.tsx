import React, { FunctionComponent, useState } from "react"
import {
  Button,
  Dialog,
  DialogTitle,
} from "@material-ui/core"
import styled from "styled-components"

const DialogContent = styled.div`
  padding: 0 24px 24px 24px;
`

const WelcomeDialog:FunctionComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  return (
    <Dialog
      onClose={() => setIsModalOpen(false)}
      aria-labelledby="welcome-dialogue"
      open={isModalOpen}
    >
      <DialogTitle id="welcome-dialogue">
        Welcome to the Movie Picker
      </DialogTitle>
      <DialogContent>
        <p>Ever sat down with a giant collection of movies you've been wanting to watch, but you have no idea how to pick just one?</p>
        <p>If so, this tool is for you.</p>
        <p>Load up a list of pre-selected titles and start filtering by whatever genre you might be in the mood for. If you're still stuck with indecision, use the "Choose For Me" button to randomly select a film from the final results.</p>
        <Button
          variant="contained"
          color="primary"
          onClick={() => setIsModalOpen(false)}>
            Get Started
        </Button>
      </DialogContent>
    </Dialog>
  )
}

export default WelcomeDialog
