import productData from '../../fixtures/product.json'

describe('Products API - PUT', () => {

  it('should update a product successfully', () => {
    const id = 1
    cy.putProduct(id, productData.updatedProduct).then(response => {
      expect(response.status).to.eq(200)
      expect(response.body.title).to.eq(productData.updatedProduct.title)
    })
  })

  it('should validate the JSON formatting.', () => {
    const product = `{
    "title": "Test Product"
    "price": 99.9
    "description": "Product created for test automation"
    "image": "https://i.pravatar.cc",
    "category": "electronics"
  }`
    cy.putProduct(1, product).then(response => {
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq(undefined)
    })
  })

  it('should return a 400 error when the id does not a number', () => {
    cy.putProduct("x", productData.updatedProduct).then(response => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property('status', 'error')
      expect(response.body).to.have.property(
        'message',
        'something went wrong! check your sent data'
      )
    })
  })

  it('should return error when product id is not provided in URL', () => {
    cy.updateProductWithoutID(productData.updatedProduct).then((response) => {
      expect(response.status).to.be.within(400, 499)

      expect(response.body).to.include('Cannot PUT /products')
    })
  })

})
