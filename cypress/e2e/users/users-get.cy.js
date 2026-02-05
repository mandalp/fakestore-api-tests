import { userSchema } from '../../schemas/user.schema'
import { validateSchema } from '../../support/schemaValidator'

describe('Users API - GET', () => {

  it('should return all users', () => {
    cy.request('/users').then(response => {
      expect(response.status).to.eq(200)
      expect(response.body).to.be.an('array')
      expect(response.body.length).to.be.greaterThan(0)

      response.body.forEach(user => {
        const result = validateSchema(userSchema, user)
        expect(result.valid, JSON.stringify(result.errors)).to.be.true
      })
    })
  })

})
