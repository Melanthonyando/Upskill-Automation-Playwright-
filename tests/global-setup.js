import dotenv from 'dotenv';
import { time } from 'node:console';
dotenv.config();
const { chromium } = require('playwright');

async function globalSetup() {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();   
    
    // Navigate to Login page
    await page.goto('https://icehrm-open.gamonoid.com/login.php');
    // Wait for the page to load
    await page.setDefaultTimeout(60000);

    // Perform Login
    await page.fill('#username', process.env.mel_user_name || 'admin');
    await page.fill('#password',process.env.mel_user_password || 'admin');
    
    await page.click('button[type="button"]');
     timeout: 500
    
    // Save the storage state to a file
    await context.storageState({ path: 'storageState.json' });
}

module.exports = globalSetup;