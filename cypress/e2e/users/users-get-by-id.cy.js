describe('Users API - GET by ID', () => {

  it('should return a user by id', () => {
    const idUser = 1
    cy.getUserByID(idUser).then(response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', 1)
    })
  })

  it('should return error for non existing user', () => {
    const idUser = 9999
    cy.getUserByID(idUser).then(response => {
      expect(response.status).to.eq(404)
    })
  })

})
