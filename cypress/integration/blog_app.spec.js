describe('Blog app', function () {
  beforeEach(function () {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function () {
    // check to see that loginform is displayed by default
    cy.get('form').contains('Username')
    cy.get('#username')
    cy.get('#password')
    cy.get('#loginButton')
  })

  describe('Login', function () {
    it('succeeded with correct credentials', funtion() {
      // test login with valid creds
      
    })
  })
})