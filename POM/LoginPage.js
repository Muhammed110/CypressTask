class LoginPage
{
  //Private methods to get all elements
  #getEmailInput()
  {
    return cy.get('#email');
  }
  #getPasswordInput()
  {
    return cy.get('#password');
  }
  #getRemmemberMeCheck()
  {
    return cy.get('input#flexCheckIndeterminate');
  }
  #getLoginButton()
  {
    return cy.get('button.btn.btn-primary');
  }
  //Public methods to fill login data
  fillRegistrationForm(email, password) {
    this.#getEmailInput().type(email);
    this.#getPasswordInput().type(password);
    this.#getRemmemberMeCheck().click();
    this.#getLoginButton().click();
  }

}

export default new LoginPage();
