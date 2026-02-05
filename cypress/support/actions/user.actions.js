Cypress.Commands.add('createUser', (user) => {
  return cy.api({
    method: 'POST',
    url: '/users',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
    failOnStatusCode: false
  })
})

Cypress.Commands.add('getUsers', () => {
  return cy.api({
    method: 'GET',
    url: '/users',
    headers: { 'Content-Type': 'application/json' },
    failOnStatusCode: false
  })
})

Cypress.Commands.add('getUserByID', (id) => {
  return cy.api({
    method: 'GET',
    url: '/users/'+id,
    headers: { 'Content-Type': 'application/json' },
    failOnStatusCode: false
  })
})

Cypress.Commands.add('putUser', (id, userData) => {
  return cy.api({
      method: 'PUT',
      url: '/users/'+ id,
      body: userData,
      failOnStatusCode: false
    })
})

Cypress.Commands.add('updateUserWithoutID', (userData) => {
  return cy.api({
      method: 'PUT',
      url: '/users/',
      body: userData,
      failOnStatusCode: false
    })
})

Cypress.Commands.add('deleteUser', (id) => {
  return cy.api({
      method: 'DELETE',
      url: '/users/'+ id,
      failOnStatusCode: false
    })
})

Cypress.Commands.add('deleteUserWithoutID', () => {
  return cy.api({
      method: 'DELETE',
      url: '/users/',
      failOnStatusCode: false
    })
})