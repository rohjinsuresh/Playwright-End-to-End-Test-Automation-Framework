# 🚀 Playwright End-to-End Automation Framework(UI + API)

<p align="center">
  <b>A hands-on QA automation project I built to strengthen my Playwright skills</b>
</p>

<p align="center">

![Build](https://img.shields.io/badge/build-passing-brightgreen)
![Tests](https://img.shields.io/badge/tests-automated-blue)
![Framework](https://img.shields.io/badge/framework-Playwright-green)
![Language](https://img.shields.io/badge/language-JavaScript-yellow)
![CI](https://img.shields.io/badge/CI-GitHub%20Actions-orange)
![Docker](https://img.shields.io/badge/docker-supported-blue)

</p>

---

## 📌 About This Project

This is a **personal learning project** I created to **build and demonstrate my skills in QA automation using Playwright**.

Instead of just writing basic scripts, I focused on designing a **real-world automation framework** similar to what is used in companies.

I built this project by:

* Exploring Playwright features in depth
* Structuring the framework step by step
* Implementing real testing practices
* Continuously improving based on learning

👉 The goal was to **understand how automation frameworks actually work in real projects**, not just to automate test cases.

---

## 🌐 Applications Under Test

| Type | Application               |
| ---- | ------------------------- |
| UI   | https://www.saucedemo.com |
| API  | https://reqres.in         |

---

## 🧱 Framework Architecture

```id="arch3"
Test Specs (UI + API)
        ↓
Fixtures (Reusable setup)
        ↓
Page Object Model (POM)
        ↓
Utilities (Data handling)
        ↓
Environment Config
```

---

## 📁 Project Structure

```id="arch4"
playwright-ui-api-framework/
│
├── pages/              # Page Object Models
├── tests/
│   ├── ui/             # UI test cases
│   └── api/            # API test cases
│
├── fixtures/           # Reusable fixtures (login setup)
├── utils/              # Helper functions
├── config/             # Environment configs
├── test-data/          # JSON test data
│
├── Dockerfile
├── playwright.config.js
├── package.json
│
└── .github/workflows/  # CI pipeline
```

---

## ⚙️ Tech Stack

* Playwright
* JavaScript (Node.js)
* Allure Reports
* Docker
* GitHub Actions

---

## 🧪 What I Implemented

### 🔹 UI Automation

* Login functionality
* Inventory page validation
* Add-to-cart flow

### 🔹 API Testing

* GET users
* POST user creation

---

## 🚀 Framework Capabilities

While building this, I focused on implementing features used in real projects:

* Page Object Model (POM)
* Test fixtures (reusable login setup)
* Data-driven testing using JSON
* Cross-browser testing
* Retry logic for flaky tests
* API + UI combined testing
* Allure reporting
* CI/CD pipeline using GitHub Actions
* Docker-based execution

---

## 📊 Reports

### Playwright HTML Report

```bash id="rep1"
npx playwright show-report
```

### Allure Report

```bash id="rep2"
npx allure generate ./allure-results --clean -o ./allure-report
npx allure open ./allure-report
```

---

## ▶️ How to Run This Project

```bash id="run1"
git clone <your-repo-url>
cd playwright-ui-api-framework
npm install
npx playwright install
npx playwright test
```

---

## 🐳 Run with Docker

```bash id="run2"
docker build -t playwright-tests .
docker run playwright-tests
```

---

## ⚡ CI/CD

I integrated this project with **GitHub Actions** so that:

* Tests run automatically on code push
* Reports are generated and stored
* Execution is consistent across environments

---

## 💡 What I Learned

While building this project, I gained hands-on experience in:

* Designing automation frameworks from scratch
* Structuring scalable test code
* Handling real-world testing scenarios
* Combining UI and API testing
* Integrating automation with CI/CD
* Debugging flaky tests and improving stability

---

## 📌 Why I Built This

I wanted to move beyond:

❌ Basic test scripts
❌ Copy-paste automation

and focus on:

✔ Building a **real automation framework**
✔ Understanding **how QA works in real projects**
✔ Improving my **problem-solving and testing approach**

---

## 🚀 Next Steps

I’m planning to enhance this further by adding:

* Visual testing
* Accessibility testing
* Test tagging and selective runs
* Advanced reporting
* Parallel CI pipelines

---

## 👨‍💻 About Me

QA Engineer focused on:

* Manual Testing
* Automation Testing
* Playwright

---

## ⭐ If you found this useful

Feel free to fork or explore this project!
