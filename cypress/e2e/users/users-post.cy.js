import userData from '../../fixtures/user.json'
import { userSchema } from '../../schemas/user.schema'
import { validateSchema } from '../../support/schemaValidator'

describe('Users API - POST', () => {

  it('should create a user successfully', () => {
    cy.createUser(userData.newUser).then(response => {
      expect(response.status).to.eq(201)

      const result = validateSchema(userSchema, response.body)
      expect(result.valid, JSON.stringify(result.errors)).to.be.true
    })
  })

})
