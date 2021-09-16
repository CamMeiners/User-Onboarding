describe('Onboarding Form', () => {
    beforeEach(() => {
        cy.visit('localhost:3000')
    })

    const nameInput = () => cy.get('input[name=name]');
    const passwordInput = () => cy.get('input[name=password]');
    const emailInput = () => cy.get('input[name=email]');
    const tosInput = () => cy.get('input[name=termsOfService]');
    const submitInput =() => cy.get('button[id=submitBtn')


    it('sanity check to make sure tests work', () => {
        // 'it' is a test
        // 'expect' is an assertion
        expect(1 + 2).to.equal(3);
        expect(2 + 2).not.to.equal(5); // strict equality === !===
        expect({}).not.to.equal({}); // strict equality === !===
        expect({}).to.eql({}); // not strict == !==
    })

    it('We can write a name in the name field', () => {
            nameInput()
            .should('have.value','')
            .type('Harold')
            .should('have.value', 'Harold')
    })
    it('We can write a email in the email field', () => {
        passwordInput()
        .should('have.value','')
        .type('Harold')
        .should('have.value', 'Harold')
})
    it('We can write a password in the password field', () => {
    emailInput()
    .should('have.value','')
    .type('Harold')
    .should('have.value', 'Harold')
})

it('We can toggle terms of service', () =>{
    tosInput()
    .should('not.be.checked')
    .check()
    .should('be.checked')

})
it('Submit button submits the data', () => {
    submitInput().should('be.disabled');
    nameInput().type('Cam');
    emailInput().type('cam@lambda.com');
    passwordInput().type('passwordpassword');
    tosInput().check();
    submitInput().should('not.be.disabled');
    submitInput().click();
    nameInput().should('have.value', '');
    emailInput().should('have.value', '');
    passwordInput().should('have.value','');
    tosInput().should('not.be.checked');
})
it('Cannot submit until form is fully filled out', () =>{
    nameInput().type('cam');
    submitInput().should('be.disabled');
    emailInput().type('cam@lambda.com');
    submitInput().should('be.disabled');
    passwordInput().type('passwordpassword');
    submitInput().should('be.disabled');
    tosInput().check();
    submitInput().should('not.be.disabled');
})












})
//Welcome to the danger zone