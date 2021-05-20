
describe('From Test', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000')
	})

	const nameInput = () => cy.get('input[name=name]')
	const emailInput = () => cy.get('input[name=email]')
	const pwdInput = () => cy.get('input[name=password]')

	const tosChkBx = () => cy.get('input[name=termsOfService]')

	const submitBtn = () => cy.get('button[id=submitBtn]')

	//error messages

	const nameErr = () => cy.get('div[id=nameErr]')
	const emailErr = () => cy.get('div[id=emailErr]')
	const pwdErr = () => cy.get('div[id=pwdErr]')
	const tosErr = () => cy.get('div[id=tosErr]')

	it('can type in the inputs', () => {
		nameInput()
			.should('have.value', '')
			.type('Chris')
			.should('have.value', 'Chris')
		emailInput()
			.should('have.value', '')
			.type('test@test.com')    
			.should('have.value', 'test@test.com')
		pwdInput()
			.should('have.value', '')
			.type('testpassword')       
			.should('have.value', 'testpassword')
	})

	it('user can check TOS', () => {
		tosChkBx()
			.should('not.be.checked')
			.click()
			.should('be.checked')
	})

	it('user can submit form data after fields have been entered', () => {
		nameInput()
			.should('have.value', '')
			.type('Chris')
			.should('have.value', 'Chris')
		emailInput()
			.should('have.value', '')
			.type('test@test.com')             
			.should('have.value', 'test@test.com')
		pwdInput()
			.should('have.value', '')
			.type('testpassword')
			.should('have.value', 'testpassword')
		tosChkBx()
			.should('not.be.checked')
			.click()
			.should('be.checked')
		submitBtn()
			.click()
	})

	it('form validation occurs on incorrect input', () => {
		nameInput()
			.should('have.value', '')
			.type('C')
		nameErr()
			.should('contain', 'A name is at least 2 characters long')

		emailInput()
			.should('have.value', '')
			.type('abcd')
		emailErr()
			.should('contain', 'Must be a valid email address')

		pwdInput()
			.should('have.value', '')
			.type('test')
			.clear()
		pwdErr()
			.should('contain', 'A password is required')

		tosChkBx()
			.should('not.be.checked')
			.click()
			.click()
		tosErr()
			.should('contain', 'this must be one of the following values: true')
	})
})