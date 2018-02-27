import React from 'react';
import {FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
 
import '../../bootstrap.css'

export class AddNewHabitForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);

    this.state = {
      value: ''
    };
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 1) return 'success';
    else if (length === 0) return 'error';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="newHabitForm"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Track New Habit</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Everyday, I will . . . "
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <Button bsStyle="primary" bsSize="large" >
            Start Tracking
          </Button>
        </FormGroup>
      </form>
    );
  }
}

