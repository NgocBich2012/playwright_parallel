// @ts-check
const { test, expect } = require('@playwright/test');

test.describe("Other Tests", () => {
    test('has title', async ({ page }) => {
        console.log(100)
    })
});