import * as yup from 'yup'

const formSchema = yup.object().shape({
	name: yup
			.string()
			.trim()
			.required('Name is required')
			.min(2, 'A name is at least 2 characters long'),
	email: yup
			.string()
			.email('Must be a valid email address')
			.required('Email is required'),
	password: yup
			.string()
			.required('A password is required'),
	termsOfService: yup
			.boolean()
			.oneOf([true])
			.required('You must accept the TOS')
})

export default formSchema






