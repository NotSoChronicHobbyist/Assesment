# 🧪 Playwright Automation - DemoQA Assessment

This project automates UI testing using **Playwright + TypeScript** with a Page Object Model (POM) and data-driven testing approach.

It covers:
- Forms (Student Registration)
- Web Tables (Edit records)
- Widgets (Select Menu)

---

## 🚀 Tech Stack

- Playwright
- TypeScript
- Node.js
- Page Object Model (POM)
- Data-driven testing (JSON)

---

## 📂 Project Structure
project-root/
│
├── tests
│ ├── forms.spec.ts
│ ├── webtables.spec.ts
│ └── widgets.spec.ts
│
├── pageObject
│ └── forms.ts
| └── webTables.ts
| └── widgets.ts
│
├── test-data/ # JSON test data
│ └── datasets.json
│
├── playwright.config.ts
├── package.json
└── README.md

---

## ⚙️ Installation

Install dependencies:

npm install
npx playwright install
npx playwright test
npm test #run all test

🧪 Test Coverage
1. Forms - Student Registration

Automates:

Text inputs
Radio buttons
Checkboxes
Date picker
File upload
Dropdowns
Form submission
Modal validation

2. Web Tables

Automates:

Editing existing records
Validating updated values in table rows

3. Widgets - Select Menu

Automates:

Dropdown selection (single & grouped options)

Key Concepts Used
Page Object Model (POM)
Data-driven testing
Locators (CSS, XPath, text-based)
Assertions using expect
Parallel execution support

Execution Strategy
Tests run in parallel using Playwright workers
Each dataset runs as an independent test case

