// @ts-check
const { test, expect } = require('@playwright/test');

test.describe("Customer Tests", () => {
    test('has title', async ({ page }) => {
        console.log("customer 1")
    })

    test('has title 1', async ({ page }) => {
        console.log("customer 2")
    })
});
