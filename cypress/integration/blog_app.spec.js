describe('Blog app', function () {
  const user = {
    name: 'Testi Testaaja',
    username: 'testaaja',
    password: 'testaaja'
  }

  beforeEach(function () {
    cy.request('POST', 'http://localhost:3003/api/testing/reset')
    cy.request('POST', 'http://localhost:3003/api/users', user)
    cy.visit('http://localhost:3000')
  })

  it('Login form is shown', function () {
    // check to see that loginform is displayed by default
    cy.get('form').contains('Username')
    cy.get('#username').should('be.visible')
    cy.get('#password').should('be.visible')
    cy.get('#loginButton').should('be.visible')
  })

  describe('Login', function () {

    it('succeeded with correct credentials', function () {
      // test login with valid creds
      cy.get('#username').type(user.username)
      cy.get('#password').type(user.password)
      cy.get('#loginButton').click()
      cy.contains(`logged in as ${user.name}`)
    })

    it('fails with wrong credentials', function () {
      cy.get('#username').type(user.username)
      cy.get('#password').type(`${user.password}wrong`)
      cy.get('#loginButton').click()
      cy.get('.error').contains('learn to type!').should('have.class', 'error').and('have.css', 'color', 'rgb(255, 0, 0)')
    })
  })

  describe('When logged in', function () {
    beforeEach(function () {
      cy.login({ username: user.username, password: user.password })
    })

    it('A blog can be created', function () {
      cy.contains('add new blog').click()
      cy.get('#title').type('foobar')
      cy.get('#author').type('Sensei Foobar')
      cy.get('#url').type('http://blog.example.com')
      cy.get('#createBlogButton').click()
      cy.get('#blogList').contains('foobar').contains('Sensei Foobar')
    })

    it('A blog can be likes', function () {
      cy.addBlogs()
      // now let's test liking!
    })
  })
})