import SignInPage from "../../pages/SignInPage"


describe("Log in", function() {

    it("verify that error message is displayed if username does not exist", function() {
        const signInPage = new SignInPage()
        signInPage.visit()
        signInPage.fillUsername(Cypress.env('username'))
            .fillPassword(Cypress.env('password'))
            .submit()

        expect(signInPage.getError('No account found with that username.')).to.exist
        signInPage.getError('No account found with that username.').should('be.visible')

    })

    it("verify that error message is displayed if password is not fill in", function() {
        const signInPage = new SignInPage()
        signInPage.visit()
        signInPage.fillUsername(Cypress.env('username'))
            .submit()

        expect(signInPage.getError('Please enter your password.')).to.exist
        signInPage.getError('Please enter your password.').should('be.visible')

    })

    it("verify that error messages are displayed if password and username are not set", function() {
        const signInPage = new SignInPage()
        signInPage.visit()
        signInPage.submit()

        expect(signInPage.getError('Please enter username.')).to.exist
        signInPage.getError('Please enter username.').should('be.visible')
        expect(signInPage.getError('Please enter your password.')).to.exist
        signInPage.getError('Please enter your password.').should('be.visible')

    })

    it("succsess on login", function() {
        const signInPage = new SignInPage()
        signInPage.visit()

        signInPage.fillUsername("correctusername").fillPassword("correcteserpassword").submit()
        cy.url().should('eq', 'link')

    })
})