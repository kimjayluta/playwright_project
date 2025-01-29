# Playwright Test Automation Suite

![Playwright](https://img.shields.io/badge/Playwright-E2E%20Testing-green?style=for-the-badge&logo=playwright)

This repository contains an **End-to-End (E2E) test automation suite** built using **Playwright**. The framework covers **login scenarios**, integrates with **CI/CD**, utilizes **test data fixtures**, and supports **parallel test execution** for efficiency.

## 🚀 Features
- **Login Scenarios**: Automated test cases for user authentication
- **CI/CD Integration**: Seamless execution in a pipeline (GitHub Actions, Jenkins, etc.)
- **Test Data Fixtures**: Dynamic test data handling for scalability
- **Parallel Testing**: Faster execution with concurrent test runs

## 📌 Tech Stack
- **Playwright** (JavaScript/TypeScript)
- **Jest/Mocha** (Test runner)
- **GitHub Actions/Jenkins** (CI/CD)
- **Allure Report/HTML Reports** (Test reporting)

---

## 📂 Project Structure
```
playwright-tests/
│── tests/
│   ├── login.spec.js  # Login test scenarios
│   ├── dashboard.spec.js  # Other test scenarios
│── utils/
│   ├── test-data.js  # Test data fixtures
│── playwright.config.js  # Playwright configuration
│── .github/workflows/ci.yml  # CI/CD pipeline config
│── package.json  # Dependencies
│── README.md  # Project documentation
```

---

## 🛠 Setup & Installation
### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/playwright-tests.git
cd playwright-tests
```

### 2️⃣ Install Dependencies
```bash
npm install
```

### 3️⃣ Run Tests Locally
```bash
npx playwright test
```

### 4️⃣ Run Tests in Headed Mode (for debugging)
```bash
npx playwright test --headed
```

### 5️⃣ Run Tests in Parallel
```bash
npx playwright test --workers=4
```

---

## 🏗️ CI/CD Integration
This project is configured to run Playwright tests automatically in a **CI/CD pipeline**.
- GitHub Actions (`.github/workflows/ci.yml`)
- Jenkins (with `Jenkinsfile` or scripted pipeline)

To trigger the CI pipeline manually:
```bash
git push origin main
```

---

## 📊 Test Reports
### View HTML Report
```bash
npx playwright show-report
```

### Generate Allure Report (if configured)
```bash
npx allure generate allure-results --clean -o allure-report
npx allure open allure-report
```

---

## 🤝 Contribution
Feel free to fork this repo and contribute! Create a pull request if you add new features or fix issues.

---

### 🔗 Connect with Me
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/kimtheqa)  
[![GitHub](https://img.shields.io/badge/GitHub-Follow-black?style=for-the-badge&logo=github)](https://github.com/kimjayluta)

---

🚀 Happy Testing with Playwright! 🎭
