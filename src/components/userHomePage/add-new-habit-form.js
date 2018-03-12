import React from 'react';
import {FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';
 
import '../../bootstrap.css'

export default class AddNewHabitForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      value: ''
    };
  }


  getValidationState() {
    const length = this.state.value.length;
  
    if (length > 1) return 'success';
    return null;
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
    console.log(this.state.value)
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(this.state.value);
    this.props.addHabit(this.state.value);
    this.setState({value: ""})
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <FormGroup
          controlId="newHabitForm"
          validationState={this.getValidationState()}
        >
          <ControlLabel>New Habit</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Everyday, I will . . . "
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          {''}
          <Button type="submit" bsStyle="primary" className='btn-md logbutton' >
            Start Tracking
          </Button>
        </FormGroup>
      </form>
    );
  }
}

