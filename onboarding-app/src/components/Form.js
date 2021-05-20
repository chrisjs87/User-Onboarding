import React from "react";

export default function Form(props) {
	const { values, submit, change, errors } = props;

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
					<div>{errors.name}</div>
          <div>{errors.email}</div>
          <div>{errors.password}</div>
          <div>{errors.termsOfService}</div>
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
			<button>Submit</button>
		</form>
	);
}
