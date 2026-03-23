const { expect } = require('@playwright/test')

class InventoryPage {

    constructor(page) {

        this.page = page

        this.inventoryList = '.inventory_list'
    }

    async verifyInventory() {

        // Validate inventory page loaded
        await expect(this.page.locator(this.inventoryList)).toBeVisible()
    }

    async addFirstProduct() {

        // Add first item to cart
        await this.page.locator('.inventory_item button').first().click()
    }
}

module.exports = { InventoryPage }