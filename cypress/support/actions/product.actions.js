Cypress.Commands.add('createProduct', (product) => {
  return cy.api({
    method: 'POST',
    url: '/products',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(product),
    failOnStatusCode: false
  })
})

Cypress.Commands.add('getProducts', () => {
  return cy.api({
    method: 'GET',
    url: '/products',
    headers: { 'Content-Type': 'application/json' },
    failOnStatusCode: false
  })
})

Cypress.Commands.add('getProductsByID', (id) => {
  return cy.api({
    method: 'GET',
    url: '/products/'+id,
    headers: { 'Content-Type': 'application/json' },
    failOnStatusCode: false
  })
})

Cypress.Commands.add('putProduct', (id, productData) => {
  return cy.api({
      method: 'PUT',
      url: '/products/'+ id,
      body: productData,
      failOnStatusCode: false
    })
})

Cypress.Commands.add('updateProductWithoutID', (productData) => {
  return cy.api({
      method: 'PUT',
      url: '/products/',
      body: productData,
      failOnStatusCode: false
    })
})

Cypress.Commands.add('deleteProduct', (id) => {
  return cy.api({
      method: 'DELETE',
      url: '/products/'+ id,
      failOnStatusCode: false
    })
})

Cypress.Commands.add('deleteProductWithoutID', () => {
  return cy.api({
      method: 'DELETE',
      url: '/products/',
      failOnStatusCode: false
    })
})