import HomePage from './POM/HomePage';
import LoginPage from './POM/LoginPage';
import RegistrationPage from './POM/RegistrationPage';
import faker from 'faker';


describe('suite', () => {
  it('registration', () => {
    cy.visit('http://127.0.0.1:8000/');
    //Open Registration page
    HomePage.getOpenRegistrationPageButton().click();
    cy.url().should('include', '/register'); //Assert Opening registration page successfully

    //Generate Random values to use it in the testing
    const randomEmail = faker.internet.email();
    const randomName = faker.name.findName();
    const randomPassword = faker.internet.password();
    console.log(randomEmail, randomName, randomPassword);


    //Enter Data in Registration Page
    RegistrationPage.fillRegistrationForm(randomName, randomEmail, randomPassword);
    cy.url().should('include', '/login'); //Assert Opening login page successfully after registration


    //Login to Registered user
    LoginPage.fillRegistrationForm(randomEmail,randomPassword);
    cy.url().should('include', '/admin'); //Assert Opening admin page successfully after logging in
    

  
  })
})
