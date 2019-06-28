import React, { Component } from 'react'
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Checkbox from '@material-ui/core/Checkbox';

class ToggleSeenBy extends Component {
  constructor(props) {
    super(props)
  }

  toggleSeenBy = event => {
    const toggleBy = event.currentTarget.value

    let currentSeenBy = this.state.seenBy

    if (currentSeenBy.includes(toggleBy)){
      currentSeenBy = currentSeenBy.filter(csb => csb !== toggleBy)
    } else {
      currentSeenBy.push(toggleBy)
    }

    this.setState({"seenBy": currentSeenBy})
  }

  renderFormGroup(){
    const peepsInvolved = ["Jake", "Rocky"]

    const jones = peepsInvolved.map(peep => {
      return (
        <FormControlLabel
          key={peep}
          control={
            <Checkbox
              checked={this.props.seenBy.includes(peep)}
              onChange={this.props.toggleSeenBy}
              value={peep}
            />
          }
          label={peep}
        />
      )
    })

    return (
      <FormGroup>
        {jones}
      </FormGroup>
    )
  }

  render() {
    return (
      <div>
        <FormControl component="fieldset">
          <FormLabel component="legend">Seen By</FormLabel>
          {this.renderFormGroup()}
        </FormControl>
      </div>
    )
  }
}

export default ToggleSeenBy
