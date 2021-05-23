class SignInPage {
    visit() {
        cy.visit("https://www.pecodesoftware.com/qa-portal/registerlogin/registerlogin.php")
    }

    getError(errorMessage) {
        return cy.get('span.help-block').contains(errorMessage)

    }


    fillUsername(value) {
        const field = cy.get('input[type="text"]');
        field.clear();
        field.type(value)

        return this;
    }

    fillPassword(value) {
        const field = cy.get('input[type="password"]');
        field.clear();
        field.type(value);

        return this;
    }

    submit() {
        const button = cy.get('input[type="submit"]');
        button.click();
    }
}

export default SignInPage;