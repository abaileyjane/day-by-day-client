import React from 'react';
import { FormControl, Form, FormGroup, ControlLabel, Button} from 'react-bootstrap';
import {login} from '../../actions/auth';
import {Field, reduxForm, focus} from 'redux-form';



export class UserSigninForm extends React.Component {
  constructor(props, context) {
    super(props, context);


    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);

    this.state = {
      emailValue:'',
      passwordValue: '',
    };
  }

  onSubmit(values) {
        return this.props.dispatch(login(this.state.emailValue, this.state.passwordValue));
    }

  getEmailValidationState() {
     const length = this.state.emailValue.length;

    if ((this.state.emailValue).includes('@')) return 'success';
    else if(length === 0) return null;
    else if (!(this.state.emailValue).includes('@')) return 'error';
    return null;
  }

    getPasswordValidationState() {
    const length = this.state.passwordValue.length;
    if (length > 1) return 'success';
    else if (length === 0) return null;
    return null;
  }

   handleEmailChange(e) {
    this.setState({ emailValue: e.target.value });
  }

   handlePasswordChange(e) {
    this.setState({ passwordValue: e.target.value });
  }

  render(){
	return (
		<Form inline  onSubmit={values =>
                    this.onSubmit(values)}>
			<FormGroup
          		controlId="email"
          		validationState={this.getEmailValidationState()}
        	>
          	<FormControl
	            type="text"
	            value={this.state.emailValue}
	            placeholder="Email"
	            onChange={this.handleEmailChange}
	          />
         	 <FormControl.Feedback />
        </FormGroup>
        {' '} 
        <FormGroup
          controlId="password"
          validationState={this.getPasswordValidationState()}
           type="password"
        >
          <FormControl
            type="password"
            value={this.state.passwordValue}
            placeholder="Password"
            onChange={this.handlePasswordChange}
          />
          <FormControl.Feedback />
        </FormGroup>  {' '} 
        <Button bsStyle="primary" bsSize="small" >
            Go!
        </Button>

	</Form>
)}}

export default reduxForm({
    form: 'login',
    onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'email'))
})(UserSigninForm);