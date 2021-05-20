import React from "react";

export default function Form(props) {
	const { values, submit, change, errors, disabled } = props;

	const onSubmit = evt => {
		evt.preventDefault()
		submit()
	}

	const onChange = evt => {
		const { name, value, checked, type} = evt.target
		const valueToUse = type === 'checkbox' ? checked : value
		change(name, valueToUse)
	}

  return (
		<form onSubmit={onSubmit}>

			<div>
					<div id='nameErr'>{errors.name}</div>
          <div id='emailErr'>{errors.email}</div>
          <div id='pwdErr'>{errors.password}</div>
          <div id='tosErr'>{errors.termsOfService}</div>
			</div>

			<label>Name: 
				<input 
					type='text'
					name='name'
					onChange={onChange}
					value={values.name}
				/>
			</label>

			<label>Email: 
				<input 
					type='text'
					name='email'
					onChange={onChange}
					value={values.email}
				/>
			</label>

			<label>Password:
				<input 
					type='text'
					name='password'
					onChange={onChange}
					value={values.password}
				/>
			</label>

			<label>Terms of Service: 
				<input 
					type='checkbox'
					name='termsOfService'
					onChange={onChange}
					checked={values.termsOfService}
				/>
			</label>
			<button id='submitBtn' disabled={disabled}>Submit</button>
		</form>
	);
}
