describe('Products API - DELETE', () => {

  it('should delete a product successfully', () => {
    const id = 1
    cy.deleteProduct(id).then(response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', 1)
    })
  })

  it('should delete a product with invalid id', () => {
    const id = "x"
    cy.deleteProduct(id).then(response => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property('status', 'error')
      expect(response.body).to.have.property(
        'message',
        'product id should be provided'
      )
    })
  })

    it('should delete a product without id', () => {
    cy.deleteProductWithoutID().then(response => {
      expect(response.status).to.be.within(400, 499)

      expect(response.body).to.include('Cannot DELETE /products')
    })
  })
})
