import cartData from '../../fixtures/cart.json'

describe('Carts API - Get by ID', () => {

  it('should return a cart by id', () => {
    cy.getCartById(1).then(response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', 1)
      expect(response.body).to.have.property('products')
    })
  })

  it('should return error for non existing cart', () => {
    cy.getCartById(99999).then(response => {
      expect(response.status).to.eq(404)
    })
  })

})
