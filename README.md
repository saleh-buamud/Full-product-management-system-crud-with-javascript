# CRUDS — Product Management System

CRUDS is a Product Management System built with HTML, CSS, and JavaScript. The project allows users to manage product information through a browser-based form and product table, with full CRUD functionality and Local Storage data persistence.

## Features

| Function                   | Description                                | Status         |
| -------------------------- | ------------------------------------------ | -------------- |
| Get Total                  | Calculates the final product total         | ✅ Completed    |
| Create Product             | Creates and adds a new product             | ✅ Completed    |
| Save Data to Local Storage | Persists products in browser storage       | ✅ Completed    |
| Clear Input Fields         | Resets form fields after operations        | ✅ Completed    |
| Read Data                  | Displays saved products in the table       | ✅ Completed    |
| Count Data                 | Controls the number of products created    | ✅ Completed    |
| Delete Data                | Removes a selected product or all products | ✅ Completed    |
| Edit / Update Data         | Loads and updates an existing product      | ✅ Completed    |
| Search                     | Searches products by title/category        | 🚧 In Progress |
| Clean Data                 | Validates and cleans input data            | 🚧 In Progress |

The application includes product fields for:

* Title
* Price
* Taxes
* Ads
* Discount
* Total
* Count
* Category

It also includes functionality for creating, displaying, updating, deleting products, clearing input fields, and creating multiple products using the count feature.

## CRUD Operations

The application implements the four core CRUD operations:

### Create

Users can enter product information through the form and create new product records.

### Read

Saved product records are retrieved and displayed dynamically in the products table.

### Update

Users can select an existing product, load its information into the form, modify the data, and save the updated product.

### Delete

Users can remove individual products or delete all products from the collection.

## Local Storage

Product data is stored in the browser using `localStorage`.

This allows product records to remain available even after refreshing or reopening the browser.

The project does not use a backend service or an external database.

## Project Progress

### ✅ Completed

The following features are currently implemented:

* Product management interface
* Product form with pricing fields
* Get Total calculation
* Create Product
* Read and display products
* Update Product
* Delete individual products
* Delete all products
* Save products to Local Storage
* Clear input fields after operations
* Count Data for creating multiple products
* Product table structure
* Responsive styling
* UI animations

### 🚧 In Progress / To Do

Future improvements include:

* Search by title
* Search by category
* Input validation
* Clean Data
* Improve search UX
* Add sorting
* Improve responsive design
* Refactor JavaScript functions
* Improve user feedback

## Development Roadmap

### Phase 1 — Core CRUD

* [x] Create
* [x] Read
* [x] Update
* [x] Delete
* [x] Local Storage
* [x] Get Total
* [x] Clear Input Fields
* [x] Count Data

### Phase 2 — Search & Data Handling

* [ ] Search
* [ ] Validation
* [ ] Clean Data

### Phase 3 — UI / UX

* [x] Responsive Design foundation
* [x] Animations foundation
* [ ] Better Feedback
* [ ] Improved Form UX

### Phase 4 — Future Improvements

* [ ] Add sorting
* [ ] Improve validation
* [ ] Refactor JavaScript code
* [ ] Add additional product-management features

## Tech Stack

| Technology    | Usage                                      |
| ------------- | ------------------------------------------ |
| HTML5         | Structure and product management interface |
| CSS3          | Styling, responsive UI, and animations     |
| JavaScript    | Application logic and data management      |
| Local Storage | Browser-based data persistence             |

## Project Structure

```text
CRUDS/

│

├── index.html
├── style.css
├── main.js
└── README.md
```

## Function Map

The relationship between the main product-management functions is:

```text
User Input
    ↓
Get Total
    ↓
Create Product
    ↓
Count Data (Optional Multiple Products)
    ↓
Save to Local Storage
    ↓
Clear Input Fields
    ↓
Read Data
    ↓
Display Products
    ↓
Update / Delete
```

Product data is stored locally in the browser and rendered dynamically in the product table.

## Current Status

**Project Status: 🟢 Active Development**

### Completed Features

* Create Product
* Read and Display Products
* Update Product
* Delete Product
* Delete All Products
* Local Storage Persistence
* Get Total Calculation
* Clear Input Fields
* Count Data
* Responsive Design Foundation
* UI Animations

### Current Focus

Implementing search functionality and improving data validation.

### Next Planned Improvements

* Search by title and category
* Data validation
* Clean Data
* Better user feedback
* Sorting
* Improved Form UX
* JavaScript code refactoring
