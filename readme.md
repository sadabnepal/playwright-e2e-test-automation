# Playwright TypeScript Test Automation Framework

## Requirements:

[![NodeJs](https://img.shields.io/badge/-NodeJS-%23339933?logo=npm)](https://nodejs.org/en/download/)
[![VSCode](https://img.shields.io/badge/-Visual%20Studio%20Code-%233178C6?logo=visual-studio-code)](https://code.visualstudio.com/download)

## Getting Started:

Clone Repository

```bash
git clone https://github.com/sadabnepal/playwright-e2e-test-automation.git &&
cd playwright-e2e-test-automation
```

Install Packages
```bash
npm install
npm run prepare
```

Install Browsers
```bash
npx playwright install --with-deps chromium
npx playwright install --with-deps webkit
```

Run tests and Generate Report

```bash
npm test                 [ run all tests ]
npm run test:chromium    [ Run UI tests in Chromium ]
npm run test:webkit      [ Run UI tests in Webkit ]
npm run test:api:rest    [ Run API tests ]
npm run test:api:graphql [ Run API tests ]
```

Code Analyze and Fix
```bash
npm run lint
npm run lint:fix
```

check script section of package.json for more test commands

### Features:
    - Support for: Web App, Rest API, GraphQL
    - Report: Playwright HTML, Ortoni HTML
    - CI/CD: Github Action
    - Schema validation: zod library
    - Test data generator: faker-js library
    - Multi environment and secretes: dotenv library
    - Code Quality Control: EsLint, Husky, Custom Interface

### Tech stacks:
[![Playwright](https://custom-icon-badges.demolab.com/badge/Playwright-2EAD33?logo=playwright&logoColor=fff)](https://playwright.dev/)
[![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?logo=graphql&logoColor=white)](https://graphql.org/learn/)
[![TypeScript](https://img.shields.io/badge/-TypeScript-%233178C6?logo=Typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GithubActions](https://img.shields.io/badge/github%20actions-black?logo=githubactions&logoColor=white)](https://github.com/features/actions)
[![ESlint](https://img.shields.io/badge/ESLint-4B3263?logo=eslint&logoColor=white)]([https://www.docker.com/](https://typescript-eslint.io/))
[![Husky](https://img.shields.io/badge/Husky-dbc1ac?logo=gitlab&logoColor=white)]([https://www.docker.com/](https://typicode.github.io/husky/))
[![zod](https://custom-icon-badges.demolab.com/badge/zod-blue?logo=zod&logoColor=white)](https://zod.dev/)


## Sample Report:
![Report](./samples/report.png)



## version conflict with mobilewright (playwright under the hood)
run following command to check what of playwright is used by mobilewright
```
cat node_modules/@mobilewright/test/node_modules/@playwright/test/package.json | grep '"version"'
```

in package.json below section update the same version
```
"overrides": {
    "@playwright/test": "1.58.2"
}
```

clean install
```
rm -rf node_modules package-lock.json
npm install
```

verify only one copy exists
```
find node_modules -name "package.json" -path "*/@playwright/test/package.json" | xargs grep '"version"'
```