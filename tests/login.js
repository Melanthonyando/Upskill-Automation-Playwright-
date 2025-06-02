// test/actions/login.js
import { test, expect } from '@playwright/test';

export class Login{
    constructor(page) {
        this.page = page;
    }
    async LoginAdmin(username , password) {

        // Navigate to the Login page
        await this.page.goto('https://icehrm-open.gamonoid.com/login.php');
        // Wait for the page to load
        {timeout: 2000}
    }
}

module.exports = { Login };