# Cypress-Automation-Swag-Labs

# 🌐 Cypress UI Test Automation Demo Project

This is a **demo project** created to showcase a complete **Cypress UI Test Automation Framework** built using the **Page Object Model (POM)** design pattern.

## ✅ Key Features

- ✅ **Cypress** – Modern JavaScript-based test framework for end-to-end testing
- ✅ **Page Object Model (POM)** – Clean and maintainable code structure
- ✅ **Allure Reports** – Interactive and visually rich test reporting
- ✅ **Reusable custom commands**
- ✅ **Data-driven testing support**
- ✅ **Pre-configured test scripts for demonstration**

## 📁 Project Structure

```
.
├── cypress/
│   ├── downloads/                     # Folder for downloaded files (if any)
│   ├── e2e/
│   │   └── ui-tests/                  # Test cases
│   │       ├── 1-login-tests.js
│   │       └── 2-products-tests.js
│   ├── fixtures/                      # Test data files
│   │   ├── login-data.json
│   │   └── products-data.json
│   ├── page-objects/
│   │   ├── page-actions/              # Page-level actions
│   │   │   ├── login-page-actions.js
│   │   │   └── products-page-actions.js
│   │   └── page-elements/             # Page element locators
│   │       ├── login-page-elements.json
│   │       └── products-page-elements.json
│   └── support/                       # Reusable commands and custom utilities
├── node_modules/                      # Project dependencies
├── .gitignore
├── cypress.config.js                  # Cypress configuration file
├── package.json
├── package-lock.json
└── README.md
```

## 🚀 How to Run

1. **Clone this repo**

```bash
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
```

2. **Install dependencies**

```bash
npm install
```

3. **Run tests in Cypress Test Runner**

```bash
npx cypress open
```

4. **Run tests in headless mode**

```bash
npx cypress run
```

3. **Generate Allure Report**

```bash
npm run allure:generate && npm run allure:open
```

📊 Reporting
Test execution results are captured using Allure, providing:

- Clean visual reports

- Step-by-step test breakdown

- Failure screenshots and logs
