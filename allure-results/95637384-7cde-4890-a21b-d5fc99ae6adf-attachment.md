# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demoProjectPOM.spec.ts >> DemoProjectSauce Labs Backpack,2
- Location: tests\demoProjectPOM.spec.ts:8:5

# Error details

```
Error: locator.textContent: Error: strict mode violation: locator('.inventory_item_name') resolved to 6 elements:
    1) <div class="inventory_item_name " data-test="inventory-item-name">Sauce Labs Backpack</div> aka locator('[data-test="item-4-title-link"]')
    2) <div class="inventory_item_name " data-test="inventory-item-name">Sauce Labs Bike Light</div> aka locator('[data-test="item-0-title-link"]')
    3) <div class="inventory_item_name " data-test="inventory-item-name">Sauce Labs Bolt T-Shirt</div> aka locator('[data-test="item-1-title-link"]')
    4) <div class="inventory_item_name " data-test="inventory-item-name">Sauce Labs Fleece Jacket</div> aka locator('[data-test="item-5-title-link"]')
    5) <div class="inventory_item_name " data-test="inventory-item-name">Sauce Labs Onesie</div> aka locator('[data-test="item-2-title-link"]')
    6) <div class="inventory_item_name " data-test="inventory-item-name">Test.allTheThings() T-Shirt (Red)</div> aka locator('[data-test="item-3-title-link"]')

Call log:
  - waiting for locator('.inventory_item_name')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]:
    - banner [ref=e5]:
      - generic [ref=e6]:
        - generic [ref=e7]:
          - button "Open Menu" [ref=e8] [cursor=pointer]
          - img "Open Menu" [ref=e9]
        - generic [ref=e10]: Swag Labs
        - button "Cart, empty" [ref=e13]
      - generic [ref=e14]: Your Cart
    - main [ref=e16]:
      - generic [ref=e17]:
        - generic [ref=e18]:
          - generic [ref=e19]: QTY
          - generic [ref=e20]: Description
        - generic [ref=e21]:
          - button "Continue Shopping" [ref=e22] [cursor=pointer]
          - button "Checkout" [ref=e23] [cursor=pointer]
  - contentinfo [ref=e24]:
    - list [ref=e25]:
      - listitem [ref=e26]:
        - link "X" [ref=e27]:
          - /url: https://x.com/saucelabs
      - listitem [ref=e28]:
        - link "Facebook" [ref=e29]:
          - /url: https://www.facebook.com/saucelabs
      - listitem [ref=e30]:
        - link "LinkedIn" [ref=e31]:
          - /url: https://www.linkedin.com/company/sauce-labs/
    - generic [ref=e32]: © 2026 Sauce Labs. All Rights Reserved. Terms of Service | Privacy Policy
```

# Test source

```ts
  1  | import { expect, Locator, Page } from "@playwright/test";
  2  | export class CartPage {
  3  |     page:Page
  4  |     checkoutButton:Locator
  5  |     shopingcartItemLocator:Locator
  6  |     constructor(page:Page) {
  7  |         this.page = page
  8  |         this.checkoutButton = page.locator("#checkout")
  9  |         this.shopingcartItemLocator = page.locator(".inventory_item_name")
  10 |     }
  11 | 
  12 |     async verifyCartItem(myProduct:string) {
> 13 |         const shopingcartItem = await this.shopingcartItemLocator.textContent()
     |                                                                   ^ Error: locator.textContent: Error: strict mode violation: locator('.inventory_item_name') resolved to 6 elements:
  14 |         await expect(myProduct).toBe(shopingcartItem)
  15 | 
  16 |     }
  17 |     async checkout() {
  18 |         await this.checkoutButton.click()
  19 | 
  20 |     }
  21 | 
  22 | }
```