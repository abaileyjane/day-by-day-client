import React from 'react';
import Input from './input';

export function UserLogin(props){
	// function handleSubmit(){}
	return (
			<form onSubmit={props.handleSubmit}>
				<input name="username" type="text"  label="Email" placeholder="email" />
				<input name="password" type="text"  label="Password" placeholder="password" />
				<button type="submit"> Log In </button>
			</form>
		)}