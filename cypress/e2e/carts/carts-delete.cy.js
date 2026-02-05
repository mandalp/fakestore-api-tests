import { cartSchema } from '../../schemas/cart.schema'
import { validateSchema } from '../../support/schemaValidator'

describe('Carts API - DELETE', () => {

  it('should delete a cart successfully', () => {
    const cartId = 1

    cy.deleteCartById(cartId).then(response => {
      expect(response.status).to.eq(200)

      const result = validateSchema(cartSchema, response.body)
      expect(
        result.valid,
        JSON.stringify(result.errors)
      ).to.be.true
    })
  })

  it('should handle delete for non existing cart', () => {
    const cartId = 9999
    cy.deleteCartById(cartId).then(response => {
      expect([200, 404]).to.include(response.status)
    })
  })

    it('should delete a product with invalid id', () => {
    const cartId = "x"
    cy.deleteCartById(cartId).then(response => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property('status', 'error')
      expect(response.body).to.have.property(
        'message',
        'cart id should be provided'
      )
    })
  })

})
