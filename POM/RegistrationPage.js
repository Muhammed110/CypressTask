class RegistrationPage {
  #getNameInput() {
    return cy.get('#name');
  }
  
  #getEmailInput() {
    return cy.get('#email');
  }
  
  #getPasswordInput() {
    return cy.get('#password');
  }
  
  #getConfirmPasswordInput() {
    return cy.get('#password_confirmation');
  }
  
  #getRegistrationButton() {
    return cy.get('button.btn.btn-primary');
  }
  fillRegistrationForm(name, email, password) {
    this.#getNameInput().type(name);
    this.#getEmailInput().type(email);
    this.#getPasswordInput().type(password);
    this.#getConfirmPasswordInput().type(password);
    this.#getRegistrationButton().click();
  }


}
export default new RegistrationPage();
