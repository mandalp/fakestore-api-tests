import cartData from '../../fixtures/cart.json'
import { cartSchema } from '../../schemas/cart.schema'
import { validateSchema } from '../../support/schemaValidator'

describe('Carts API - PUT', () => {

  it('should update a cart successfully', () => {
    const cartId = 1

    cy.uptateCart(cartId, cartData).then(response => {
      expect(response.status).to.eq(200)

      const result = validateSchema(cartSchema, response.body)
      expect(result.valid, JSON.stringify(result.errors)).to.be.true
    })
  })

  it('should handle update for non existing cart', () => {
    const idCart = 99999999
    cy.uptateCart(idCart, cartData).then(response => {
      expect([200, 404]).to.include(response.status)
    })
  })

  it('should return a 400 error when the id does not a number', () => {
    const invalidIdCart = 'x'
    cy.uptateCart(invalidIdCart, cartData).then(response => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property('status', 'error')
      expect(response.body).to.have.property(
        'message',
        'something went wrong! check your sent data'
      )
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
    cy.uptateCart(cart).then(response => {
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq(undefined)
    })
  })

  it('should return error when cart id is not provided in URL', () => {
    cy.uptateCartWithoutID(cartData).then((response) => {
      expect(response.status).to.be.within(400, 499)

      expect(response.body).to.include('Cannot PUT /carts')
    })
  })

})
