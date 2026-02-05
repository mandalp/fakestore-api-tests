Cypress.Commands.add('createCart', (cart) => {
  return cy.api({
    method: 'POST',
    url: '/carts',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cart),
    failOnStatusCode: false
  })
})

Cypress.Commands.add('getAllCarts', () => {
  return cy.api('/carts')
})

Cypress.Commands.add('getCartById', (id) => {
  return cy.api({
    method: 'GET',
    url: `/carts/${id}`,
    failOnStatusCode: false
  })
})

Cypress.Commands.add('uptateCart', (id, cart) => {
  return cy.api({
    method: 'PUT',
    url: `/carts/${id}`,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cart),
    failOnStatusCode: false
  })
})

Cypress.Commands.add('uptateCartWithoutID', (cart) => {
  return cy.api({
    method: 'PUT',
    url: `/carts/`,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cart),
    failOnStatusCode: false
  })
})

Cypress.Commands.add('deleteCartById', (id) => {
  return cy.api({
    method: 'DELETE',
    url: `/carts/${id}`,
    failOnStatusCode: false
  })
})
