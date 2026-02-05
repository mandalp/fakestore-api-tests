Cypress.Commands.add('postLogin', (user) => {
  return cy.api({
    method: 'POST',
    url: '/auth/login',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json'
    },
    failOnStatusCode: false
  })
})