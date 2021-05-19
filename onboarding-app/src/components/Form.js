import React from "react";
//import yup
export default function Form(props) {
  return (
		<form>
			<label>Name: 
				<input 
					type='text'
					name='name'
					onChange={null}
					value={null}
				/>
			</label>

			<label>Email: 
				<input 
					type='text'
					name='email'
					onChange={null}
					value={null}
				/>
			</label>

			<label>Password: 
				<input 
					type='text'
					name='password'
					onChange={null}
					value={null}
				/>
			</label>

			<label>Terms of Service: 
				<input 
					type='checkbox'
					name='terms-of-service'
					onChange={null}
					checked={null}
				/>
			</label>
			<button>Submit</button>
		</form>
	);
}
