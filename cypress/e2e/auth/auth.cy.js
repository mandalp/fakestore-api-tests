import userData from '../../fixtures/auth.json'

describe('POST Auth API', () => {

    it('should login successfully with valid credentials', () => {
        cy.postLogin(userData.validUser).then((response) => {
            expect(response.status).to.eq(201)
            expect(response.body).to.have.property('token')
            expect(response.body.token).to.be.a('string')
        })
    })

    it('should not login with invalid password', () => {
        cy.postLogin(userData.invalidPassword).then((response) => {
            expect(response.status).to.eq(401)
        })
    })

    it('should not login with invalid user', () => {
        cy.postLogin(userData.invalidUsername).then((response) => {
            expect(response.status).to.eq(401)
        })
    })

    it('should not login with empty request body', () => {
        cy.postLogin(userData.emptyBody).then(response => {
            expect(response.status).to.eq(400)
        })
    })

    it('should not login when password is missing', () => {
        cy.postLogin(userData.missingPassword).then(response => {
            expect(response.status).to.eq(400)
        })
    })

    it('should not login when username is missing', () => {
        cy.postLogin(userData.missingUsername).then(response => {
            expect(response.status).to.eq(400)
        })
    })
})
