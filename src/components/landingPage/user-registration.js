import React from 'react';
import {FormControl, FormGroup, ControlLabel, Button} from 'react-bootstrap';




export class UserSignupForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleFNameChange = this.handleFNameChange.bind(this);
    this.handleLNameChange = this.handleLNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleRepeatPasswordChange = this.handleRepeatPasswordChange.bind(this);



    this.state = {
      buttonDisabled: 'true',
      fNameValue: '',
      lNameValue: '',
      emailValue:'',
      passwordValue: '',
      repeatPasswordValue:''
    };
  }

  getFNameValidationState() {
    const length = this.state.fNameValue.length;
    if (length > 1) return 'success';
    // else if (length === 0) return 'error';
    return null;
  }

    getLNameValidationState() {
    const length = this.state.lNameValue.length;
    if (length > 1) return 'success';
    // else if (length === 0) return 'error';
    return null;
  }

  getEmailValidationState() {
    const length = this.state.lNameValue.length;
    if ((this.state.emailValue).includes('@')) return 'success';
    else if (length === 0) return null;
    else if (!(this.state.emailValue).includes('@')) return 'error';
    return null;
  }

    getPasswordValidationState() {
    const length = this.state.passwordValue.length;
    if (length > 1) return 'success';
    // else if (length === 0) return 'error';
    return null;
  }

    getRepeatPasswordValidationState() {
        const length = this.state.repeatPasswordValue.length;
        if (length === 0) return null;
        else if (this.state.passwordValue === this.state.repeatPasswordValue) return 'success';
        else if (this.state.passwordValue !== this.state.repeatPasswordValue) return 'error';
    
  }

  handleFNameChange(e) {
    this.setState({ fNameValue: e.target.value });
  }

   handleLNameChange(e) {
    this.setState({ lNameValue: e.target.value });
  }

   handleEmailChange(e) {
    this.setState({ emailValue: e.target.value });
  }

   handlePasswordChange(e) {
    this.setState({ passwordValue: e.target.value });
  }

   handleRepeatPasswordChange(e) {
    this.setState({ repeatPasswordValue: e.target.value });
  }

  render() {
    return (
      <form>
        <FormGroup
          controlId="firstName"
          validationState={this.getFNameValidationState()}
        >
          <ControlLabel>First Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.fNameValue}
            placeholder="First Name"
            onChange={this.handleFNameChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          controlId="LastName"
          validationState={this.getLNameValidationState()}
        >
          <ControlLabel>Last Name</ControlLabel>
          <FormControl
            type="text"
            value={this.state.LNameValue}
            placeholder="Last Name"
            onChange={this.handleLNameChange}
          />
          <FormControl.Feedback />
        </FormGroup>

         <FormGroup
          controlId="email"
          validationState={this.getEmailValidationState()}
        >
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="text"
            value={this.state.emailNameValue}
            placeholder="me@someurl.com"
            onChange={this.handleEmailChange}
          />
          <FormControl.Feedback />
        </FormGroup>

        <FormGroup
          controlId="password"
          validationState={this.getPasswordValidationState()}
            type='password'
        >
          <ControlLabel>Password</ControlLabel>
          <FormControl
            type="password"
            value={this.state.passwordValue}
            placeholder="Password"
            onChange={this.handlePasswordChange}
          />
          <FormControl.Feedback />
        </FormGroup>

         <FormGroup
          controlId="passwordRepeat"
          validationState={this.getRepeatPasswordValidationState()}
            type='password'
        >
          <ControlLabel>Confirm Password</ControlLabel>
          <FormControl
            type="password"
            value={this.state.repeatPasswordValue}
            placeholder="Password"
            onChange={this.handleRepeatPasswordChange}
          />
          <FormControl.Feedback />
        </FormGroup>
        <Button bsStyle="primary" bsSize="large" >
            Create Account
        </Button>


      </form>
    );
  }
}

