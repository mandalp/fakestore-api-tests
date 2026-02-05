import userData from '../../fixtures/user.json'

describe('Users API - PUT', () => {

  it('should update a user successfully', () => {
    const userID = 1
    cy.putUser(userID, userData.updatedUser).then(response => {
      expect(response.status).to.eq(200)
      expect(response.body.username).to.eq(userData.updatedUser.username)
    })
  })

    it('should validate the JSON formatting.', () => {
    const user = `{
    "email": "test.user@email.com"
    "username": "testuser"
    "password": "password123"
    "name": {
      "firstname": "Test",
      "lastname": "User"
    }`
    cy.putProduct(1, user).then(response => {
      expect(response.status).to.eq(400)
      expect(response.body.error).to.eq(undefined)
    })
  })

    it('should return a 400 error when the id does not a number', () => {
      const idUser = 'x'
    cy.putUser(idUser, userData.updatedUser).then(response => {
      expect(response.status).to.eq(400)
      expect(response.body).to.have.property('status', 'error')
      expect(response.body).to.have.property(
        'message',
        'something went wrong! check your sent data'
      )
    })
  })

  it('should return error when user id is not provided in URL', () => {
    cy.updateUserWithoutID(userData.updatedUser).then((response) => {
      expect(response.status).to.be.within(400, 499)

      expect(response.body).to.include('Cannot PUT /users')
    })
  })

})
