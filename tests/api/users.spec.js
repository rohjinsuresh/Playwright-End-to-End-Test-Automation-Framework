const { test, expect } = require('@playwright/test')

// GET users API
test('get users list', async ({ request }) => {

    const response = await request.get(
        'https://reqres.in/api/users?page=2'
    )

    expect(response.status()).toBe(200)

    const body = await response.json()

    expect(body.data.length).toBeGreaterThan(0)

})

// POST create user
test('create user', async ({ request }) => {

    const response = await request.post(
        'https://reqres.in/api/users',
        {
            data: {
                name: "QA Engineer",
                job: "Automation"
            }
        }
    )

    expect(response.status()).toBe(201)

})