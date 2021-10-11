Cypress.Commands.add('login', ({ username, password }) => {
  cy.request('POST', 'http://localhost:3003/api/login', {
    username, password
  }).then(({ body }) => {
    localStorage.setItem('loggedInUser', JSON.stringify(body))
    cy.visit('http://localhost:3000')
  })
})

Cypress.Commands.add('addBlog', ({ blog }) => {
  cy.request('POST', 'http://localhost:3003/api/login', blog).then(() => {
    cy.visit('http://localhost:3000')
  })
})