import "./App.css";
import Form from "./components/Form";
import React, { useState, useEffect } from 'react'

const initialFormValues = {
	name: '',
	email: '',
	password: '',
	termsOfService: false
}

function App() {
	const [formValues, setFormValues] = useState(initialFormValues);

	const inputChange = (name, value) => {

		setFormValues({
			...formValues,
			[name]: value
		})
	}



  return (
    <div className="App">
      <header className="App-header">
        <h1>User OnBoarding App</h1>
        <Form values={formValues} change={inputChange}/>
      </header>
    </div>
  );
}

export default App;
