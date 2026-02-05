import { cartSchema } from '../../schemas/cart.schema'
import { validateSchema } from '../../support/schemaValidator'
import cartData from '../../fixtures/cart.json'

describe('Carts API - POST Schema Validation', () => {
  it('should create a cart successfully', () => {
    cy.createCart(cartData.validCart).then(response => {
      expect(response.status).to.eq(201)
      expect(response.body).to.have.property('id')
      expect(response.body).to.have.property('userId', cartData.validCart.userId)
    })
  })

  it('should validate schema when creating a new cart', () => {
    cy.createCart(cartData.validCart).then(response => {
      expect(response.status).to.eq(201)

      const result = validateSchema(cartSchema, response.body)
      expect(
        result.valid,
        JSON.stringify(result.errors)
      ).to.be.true
    })
  })

  it('should validate the JSON formatting.', () => {
    const cart = `{
    "userId": 1
    "date": "2024-01-01"
    "products": [
      { "productId": 1, "quantity": 2 }
    ]
  }`
    cy.createCart(cart).then(response => {
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq(undefined)
    })
  })


})
