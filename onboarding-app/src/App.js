import "./App.css";
import Form from "./components/Form";
import React, { useState, useEffect } from 'react'
import * as yup from 'yup'
import schema from './validation/formSchema'

const initialFormValues = {
	name: '',
	email: '',
	password: '',
	termsOfService: false
}

const initialFormErrors = {
  name: '',
  email: '',
  password: '',
  termsOfService: ''
}

const initialDisabled = true;

function App() {
	const [formValues, setFormValues] = useState(initialFormValues);
	const [formErrors, setFormErrors] = useState(initialFormErrors);
	const [disabled, setDisabled] = useState(initialDisabled)

	const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: ''}))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
  }

	const inputChange = (name, value) => {
		validate(name, value)
		setFormValues({
			...formValues,
			[name]: value
		})
	}

	const formSubmit = () => {
		const newUser = {
			name: formValues.name.trim(),
			email: formValues.email.trim(),
			password: formValues.password.trim(),
			termsOfService: formValues.termsOfService
		}

		console.log(newUser);
	}

	useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className="App">
      <header className="App-header">
        <h1>User OnBoarding App</h1>
        <Form values={formValues} 
							change={inputChange} 
							disabled={disabled}
							submit={formSubmit} 
							errors={formErrors} 
				/>
      </header>
    </div>
  );
}

export default App;
