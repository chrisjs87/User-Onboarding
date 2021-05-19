import React from "react";
//import yup
export default function Form(props) {
	const { values, submit, change } = props;

	const onChange = evt => {
		const { name, value, checked, type} = evt.target
		const valueToUse = type === 'checkbox' ? checked : value
		change(name, valueToUse)
	}

  return (
		<form>
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
