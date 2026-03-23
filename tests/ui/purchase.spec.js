const { test, expect } = require('../../fixtures/baseFixture')
const { InventoryPage } = require('../../pages/inventoryPage')

test('add item to cart', async ({ loggedInPage }) => {

    const inventory = new InventoryPage(loggedInPage)

    await inventory.verifyInventory()

    await inventory.addFirstProduct()

})