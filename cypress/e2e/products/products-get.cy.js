import { productSchema } from '../../schemas/product.schema'
import { validateSchema } from '../../support/schemaValidator'

describe('Products API - GET', () => {

  it('should return all products', () => {
    cy.getProducts().then(response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
      expect(response.body).to.not.be.empty
      expect(response.body).to.have.length.greaterThan(0)

      response.body.forEach((item) => {
        const result = validateSchema(productSchema, item)
        expect(result.valid, JSON.stringify(result.errors)).to.be.true
      })
    })
  })

})
