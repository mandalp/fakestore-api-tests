import productData from '../../fixtures/product.json'
import { productSchema } from '../../schemas/product.schema'
import { validateSchema } from '../../support/schemaValidator'

describe('Products API - POST', () => {

  it('should create a product successfully', () => {
    cy.createProduct(productData.newProduct).then(response => {
      expect(response.status).to.eq(201)
      expect(response.body.id).to.match(/^[-]?\d+$/) //integer

      const result = validateSchema(productSchema, response.body)
      expect(result.valid, JSON.stringify(result.errors)).to.be.true
    })
  })

  it('should validate the JSON formatting.', () => {
    const product = `{
    "title": "Test Product"
    "price": 99.9,
    "description": "Product created for test automation",
    "image": "https://i.pravatar.cc",
    "category": "electronics"
  }`
    cy.createProduct(product).then(response => {
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq(undefined)
    })
  })

})
