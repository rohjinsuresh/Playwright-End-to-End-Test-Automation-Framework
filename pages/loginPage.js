// Page Object Model for Login Page

class LoginPage {

    constructor(page) {

        // Playwright page instance
        this.page = page

        // Locators
        this.username = '#user-name'
        this.password = '#password'
        this.loginBtn = '#login-button'
    }

    async goto() {

        // Navigate to base URL
        await this.page.goto('/')
    }

    async login(username, password) {

        // Fill username
        await this.page.fill(this.username, username)

        // Fill password
        await this.page.fill(this.password, password)

        // Click login button
        await this.page.click(this.loginBtn)
    }
}

module.exports = { LoginPage }