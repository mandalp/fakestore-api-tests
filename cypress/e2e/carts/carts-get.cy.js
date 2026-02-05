import { cartSchema } from '../../schemas/cart.schema'
import { validateSchema } from '../../support/schemaValidator'

describe('Carts API - Schema Validation', () => {
  it('should return all carts', () => {
    cy.getAllCarts().then(response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
      expect(response.body).to.not.be.empty
      expect(response.body.length).to.be.greaterThan(0)
    })
  })

  it('should validate carts schema', () => {
    cy.getAllCarts().then(response => {

      response.body.forEach(cart => {
        const result = validateSchema(cartSchema, cart)
        expect(
          result.valid,
          JSON.stringify(result.errors)
        ).to.be.true
      })
    })
  })

})
