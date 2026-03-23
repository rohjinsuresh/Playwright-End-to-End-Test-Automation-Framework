const { test, expect } = require('@playwright/test')
const { LoginPage } = require('../../pages/loginPage')
const { loadTestData } = require('../../utils/dataLoader')

// Load login test data
const users = loadTestData('./test-data/loginData.json')

// Iterate over each user
users.forEach((user) => {

    test(`login test for ${user.username}`, async ({ page }) => {

        const login = new LoginPage(page)

        await login.goto()

        await login.login(user.username, user.password)

        // Validate navigation
        await expect(page).toHaveURL(/inventory/)

    })

})