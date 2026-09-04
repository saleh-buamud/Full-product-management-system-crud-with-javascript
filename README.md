# CRUDS — Product Management System

CRUDS is a Product Management System built with HTML, CSS, and JavaScript. The project allows users to manage product information through a browser-based form and product table, with full CRUD functionality and Local Storage data persistence.

## Features

| Function                   | Description                                | Status      |
| -------------------------- | ------------------------------------------ | ----------- |
| Get Total                  | Calculates the final product total         | ✅ Completed |
| Create Product             | Creates and adds a new product             | ✅ Completed |
| Save Data to Local Storage | Persists products in browser storage       | ✅ Completed |
| Clear Input Fields         | Resets form fields after operations        | ✅ Completed |
| Read Data                  | Displays saved products in the table       | ✅ Completed |
| Count Data                 | Controls the number of products created    | ✅ Completed |
| Delete Data                | Removes a selected product or all products | ✅ Completed |
| Edit / Update Data         | Loads and updates an existing product      | ✅ Completed |
| Search by Title            | Searches products by title                 | ✅ Completed |
| Search by Category         | Searches products by category              | ✅ Completed |
| Clean Data                 | Validates and cleans input data            | ✅ Completed |

The application includes product fields for:

* Title
* Price
* Taxes
* Ads
* Discount
* Total
* Count
* Category

It includes complete functionality for creating, displaying, updating, deleting, searching, validating, and managing multiple products.

## CRUD Operations

The application implements the four core CRUD operations:

### Create

Users can enter product information and create new product records.

### Read

Saved product records are retrieved and displayed dynamically in the products table.

### Update

Users can select an existing product, load its information into the form, modify the data, and save the updated product.

### Delete

Users can remove individual products or delete all products from the collection.

## Search

The application supports searching products using:

* Search by Title
* Search by Category

Search results are displayed dynamically based on the selected search mode.

## Data Validation and Cleaning

The application validates and cleans product input data before processing it.

This helps ensure that product information is handled correctly and improves data quality.

## Local Storage

Product data is stored in the browser using `localStorage`.

This allows product records to remain available even after refreshing or reopening the browser.

The project does not use a backend service or an external database.

## Project Progress

### ✅ Completed

* Get Total calculation
* Create Product
* Read and display products
* Update Product
* Delete individual products
* Delete all products
* Save products to Local Storage
* Clear input fields
* Count Data for creating multiple products
* Search by title
* Search by category
* Data validation
* Clean Data
* Dynamic product display
* Complete CRUD operations

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

* [x] Search by Title
* [x] Search by Category
* [x] Validation
* [x] Clean Data

### Phase 3 — Application Features

* [x] Dynamic Data Display
* [x] Product Management
* [x] Search Results Display
* [x] Data Persistence

## Tech Stack

| Technology    | Usage                                 |
| ------------- | ------------------------------------- |
| HTML5         | Application structure                 |
| CSS3          | Application styling                   |
| JavaScript    | Application logic and data management |
| Local Storage | Browser-based data persistence        |

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

```text
User Input
    ↓
Data Cleaning & Validation
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
Search / Update / Delete
```

Product data is stored locally in the browser and rendered dynamically in the product table.

## Current Status

**Project Status: ✅ Completed**

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
* Search by Title
* Search by Category
* Data Validation
* Clean Data

**All planned core JavaScript features have been completed.**
