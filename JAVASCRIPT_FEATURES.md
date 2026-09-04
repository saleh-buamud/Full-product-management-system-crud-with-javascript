# JavaScript Features Documentation

## 1. Load Product Data
- **Description:** Loads products from `localStorage`; uses default products when no saved data exists.
- **Related function/logic:** `Products` initialization

## 2. Calculate Product Total
- **Description:** Calculates total price from price, taxes, and ads, then subtracts discount.
- **Related function:** `getTotal()`

## 3. Create Product
- **Description:** Creates a product object, supports creating multiple records using count, saves it, and refreshes the data display.
- **Related function:** `createProduct()`

## 4. Update Product
- **Description:** Loads product values into the inputs and saves edited values to the product list.
- **Related functions:** `updateData()`, `updateProduct()`

## 5. Delete Product
- **Description:** Removes one product from the product list and updates saved data.
- **Related function:** `deleteData()`

## 6. Delete All Products
- **Description:** Clears all products from the list and removes the saved product data.
- **Related logic:** `deleteAllBtn` click event

## 7. Search by Title
- **Description:** Finds products whose title contains the entered search text.
- **Related function:** `searchProductByTitle()`

## 8. Search by Category
- **Description:** Filters products whose category contains the entered search text.
- **Related function:** `searchProductByCategory()`

## 9. Validate Product Data
- **Description:** Checks required title, positive price, required category, and positive count when creating a product.
- **Related function:** `validateProduct()`

## 10. Save Data to localStorage
- **Description:** Persists product data in the browser after create, update, or delete operations.
- **Related logic:** `localStorage.setItem("Products", JSON.stringify(Products))`

## 11. Remove Data from localStorage
- **Description:** Deletes all stored product data.
- **Related logic:** `localStorage.removeItem("Products")`

## 12. Display Product Data
- **Description:** Clears and rebuilds the product rows from the `Products` array.
- **Related function:** `displayProducts()`

## 13. Clear Input Fields
- **Description:** Resets all product input values after create or update operations.
- **Related function:** `clearInputs()`

## 14. Submit Button Functionality
- **Description:** Prevents default submission and chooses create or update mode.
- **Related logic:** `submitBtn` click event

## 15. Product Count Handling
- **Description:** Creates repeated product records according to the entered count.
- **Related function/logic:** `createProduct()`

## 16. Edit Mode Management
- **Description:** Tracks whether the form is creating a new product or updating an existing one.
- **Related variable:** `editMode`

## 17. DOM Manipulation
- **Description:** Reads input values, updates table content, changes button text, and controls field/button state.
- **Related functions:** `getTotal()`, `displayProducts()`, `updateData()`, `updateProduct()`

## 18. Product List Refresh
- **Description:** Re-renders product data after changes and controls the delete-all button state.
- **Related function:** `displayProducts()`

## 19. Scroll to Page Top
- **Description:** Scrolls the page to the top after starting an update.
- **Related function:** `scrolPage()`
