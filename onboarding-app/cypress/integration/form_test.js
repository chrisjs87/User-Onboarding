
describe('From Test', () => {
	beforeEach(() => {
		cy.visit('http://localhost:3000')
	})

	const nameInput = () => cy.get('input[name=name]')
	const emailInput = () => cy.get('input[name=email]')
	const pwdInput = () => cy.get('input[name=password]')

	it('can type in the inputs', () => {
		nameInput()
			.should('have.value', '')
			.type('Chris')
			.should('have.value', 'Chris')
		emailInput()
			.should('have.value', '')
			.type('test@test.com')                                         //as in type on the screen
			.should('have.value', 'test@test.com')
		pwdInput()
			.should('have.value', '')
			.type('testpassword')                                         //as in type on the screen
			.should('have.value', 'testpassword')
	})


})