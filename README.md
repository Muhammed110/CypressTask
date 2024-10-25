# Cypress E2E Testing Suite

This repository contains an end-to-end (E2E) test suite for user registration and login, using Cypress with a Page Object Model (POM) structure. It includes automated testing with random data generation to validate user workflows.

## Project Structure

- **POM Folder**: Holds page objects for structured, reusable interactions:
  - `HomePage`: Actions on the home page.
  - `LoginPage`: User login interactions.
  - `RegistrationPage`: Handles registration form fields and submission.

## Setup

### Prerequisites

- **Node.js** (v14+)
- **Cypress** (v10+)

### Installation

1. Clone the repository and navigate to the directory.
2. Install dependencies:
   ```bash
   npm install

## Faker.js for Random Data

The Faker library is used to generate random user data during registration. Example values generated:

- **Email:** Random email
- **Name:** Random name
- **Password:** Random password
