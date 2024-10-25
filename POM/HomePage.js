class HomePage
{
  getOpenRegistrationPageButton() {  
    return cy.get('a[href="/register"]');
  }
  getOpenLoginPageButton() {  
    return cy.get('a[href="/login"');
  }

}

export default new HomePage();
