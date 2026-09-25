Feature: ecommerce end to end test
Scenario: Plcaing order
    Given login application with "standard_user" and "secret_sauce"
    When choose "Sauce Labs Onesie" 
    Then validate "Sauce Labs Onesie" and add to cart
    When enter valid details "pooja" and "ranjan" and "676678"
    