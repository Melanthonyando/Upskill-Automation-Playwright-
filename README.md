# 🎭 Upskill-Automation-Playwright
This repository contains automated test scripts written with Playwright.

# Getting started
# Pre-requisites
• Download and install Node.js

• Download and install any Text Editor like Visual Code/Sublime/Brackets


# Setup Visual Code
• Install GitLens Extension from the Marketplace: GitLens — Git supercharged by GitKraken https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens

• Go to Visual Code Preference > Setting and search formatOnSave and enable/ON it.

# Setup Scripts
• Clone the repository into a folder

• Go to Project root directory and install Dependency: npm install

# All the dependencies from package.json would be installed in node_modules folder.
• How to write Test

• Add new spec under e2e-tests folder

• Name the file as .spec.js (e.g. home.spec.js)

• Create folder under page-objects/pages as (e.g. homePage)

• Under page folder create constant, helper and page object file.

    • .constants.js (e.g. home.constants.js)
    
    • .helper.js (e.g. home.helper.js)
    
    • .po.js (e.g. home.po.js)
  
# How to Run Test
• Go to Project root directory and run command: npm test

• If you want to run e2e tests then run command: npm run e2e

# How to Update local npm packages
• Go to Project root directory and run command: npm update

# How to view HTML report
• Go to Project root directory: ./playwright-report/index.html

# How to view failed test screenshot
• Go to Project root directory: ./test-results/
