const { test, expect } = require('@playwright/test');

test('test', async ({ page }) => {

  // Go to https://www.saucedemo.com/
  await page.goto('https://www.saucedemo.com/');

  // Fill [data-test="username"]
  await page.fill('[data-test="username"]', 'standard_user');

  // Fill [data-test="password"]
  await page.fill('[data-test="password"]', 'secret_sauce');

  // Click [data-test="login-button"]
  await page.click('[data-test="login-button"]');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Click text=Sauce Labs Backpack
  await page.click('text=Sauce Labs Backpack');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=4');

  // Click [data-test="add-to-cart-sauce-labs-backpack"]
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  // Click [data-test="back-to-products"]
  await page.click('[data-test="back-to-products"]');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Click text=Sauce Labs Bike Light
  await page.click('text=Sauce Labs Bike Light');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=0');

  // Click [data-test="add-to-cart-sauce-labs-bike-light"]
  await page.click('[data-test="add-to-cart-sauce-labs-bike-light"]');

  // Click [data-test="back-to-products"]
  await page.click('[data-test="back-to-products"]');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Click text=Sauce Labs Bolt T-Shirt
  await page.click('text=Sauce Labs Bolt T-Shirt');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=1');

  // Click [data-test="add-to-cart-sauce-labs-bolt-t-shirt"]
  await page.click('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');

  // Click [data-test="back-to-products"]
  await page.click('[data-test="back-to-products"]');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Click text=Sauce Labs Fleece Jacket
  await page.click('text=Sauce Labs Fleece Jacket');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory-item.html?id=5');

  // Click [data-test="add-to-cart-sauce-labs-fleece-jacket"]
  await page.click('[data-test="add-to-cart-sauce-labs-fleece-jacket"]');

  // Click [data-test="back-to-products"]
  await page.click('[data-test="back-to-products"]');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

  // Click a:has-text("4")
  await page.click('a:has-text("4")');
  await expect(page).toHaveURL('https://www.saucedemo.com/cart.html');

  // Click [data-test="remove-sauce-labs-fleece-jacket"]
  await page.click('[data-test="remove-sauce-labs-fleece-jacket"]');

  // Click [data-test="checkout"]
  await page.click('[data-test="checkout"]');
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-one.html');

  // Fill [data-test="firstName"]
  await page.fill('[data-test="firstName"]', 'Raja');

  // Fill [data-test="lastName"]
  await page.fill('[data-test="lastName"]', 'Roja');

  // Fill [data-test="postalCode"]
  await page.fill('[data-test="postalCode"]', '112121');

  // Click [data-test="continue"]
  await page.click('[data-test="continue"]');
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-step-two.html');

  // Click [data-test="finish"]
  await page.click('[data-test="finish"]');
  await expect(page).toHaveURL('https://www.saucedemo.com/checkout-complete.html');

  // Click [data-test="back-to-products"]
  await page.click('[data-test="back-to-products"]');
  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');

});