describe('Products API - GET by ID', () => {

  it('should return a product by id', () => {
    const id = 1

    cy.getProductsByID(id).then(response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', 1)
    })
  })

  it('should return error for non existing product', () => {
    const id = 9999
    cy.getProductsByID(id).then(response => {
      expect(response.status).to.eq(404)
    })
  })

})
