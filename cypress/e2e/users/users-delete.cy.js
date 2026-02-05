describe('Users API - DELETE', () => {

  it('should delete a user successfully', () => {
    const userID = 1
    cy.deleteUser(userID).then(response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.have.property('id', 1)
    })
  })

  it('should delete a user with invalid id', () => {
    const id = "x"
    cy.deleteUser(id).then(response => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property('status', 'error')
      expect(response.body).to.have.property(
        'message',
        'user id should be provided'
      )
    })
  })

  it('should delete a user without id', () => {
    cy.deleteUserWithoutID().then(response => {
      expect(response.status).to.be.within(400, 499)

      expect(response.body).to.include('Cannot DELETE /users')
    })
  })

})
