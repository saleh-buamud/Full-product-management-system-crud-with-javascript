# CRUDS — Product Management System

CRUDS is a Product Management System interface built with HTML, CSS, and JavaScript. The project provides the structure for managing product information through a browser-based form and product table, with a focus on CRUD workflows and Local Storage data persistence.

> **Current implementation note:** The interface and styling are present, while `main.js` currently contains feature placeholders only. The functionality listed below is documented according to the code currently in the repository.

## Features

| Function | Description | Status |
|---|---|---|
| Get Total | Calculates the final product total | ✅ Completed |
| Create Product | Creates a new product | 🚧 In Progress |
| Save Data to Local Storage | Persists products in browser storage | 🚧 In Progress |
| Clear Input Fields | Resets form fields after operations | 🚧 In Progress |
| Read Data | Displays saved products in the table | 🚧 In Progress |
| Count Data | Controls the number of products created | 🚧 In Progress |
| Delete Data | Removes a product | 🚧 In Progress |
| Edit Data | Updates an existing product | 🚧 In Progress |
| Search | Searches products by title/category | 🚧 In Progress |
| Clean Data | Validates and cleans input data | 🚧 In Progress |

The current interface includes product fields for title, price, taxes, ads, discount, count, and category. It also includes total, search, update, and delete areas that are ready to be connected to the JavaScript application logic.

## CRUD Operations

The application is designed around the four core CRUD operations:

- **Create:** Collect product details from the form and add a new product record.
- **Read:** Retrieve product records and render them in the products table.
- **Update:** Load an existing product into the form, modify its details, and save the changes.
- **Delete:** Remove a selected product record from the collection.

These operations are planned to work together through the product form, table actions, and browser storage layer.

## Local Storage

Product data is intended to be stored in the browser using `localStorage`. Once implemented, this will allow product records to remain available after the browser page is refreshed.

This project does not currently use a backend service or an external database.

## Project Progress

### ✅ Completed

The following project foundations are currently available:

- Product management interface in `index.html`
- Product form with pricing fields and total display area
- Product table structure
- Search controls for title and category
- Responsive styling and UI animations in `style.css`
- Get Total calculation


### 🚧 To Do

Future improvements for the JavaScript functionality include:

- Implement Create Product
- Implement Save Data to Local Storage
- Implement Clear Input Fields
- Implement Read Data
- Implement Count Data
- Implement Delete Data
- Implement Edit Data
- Implement Search
- Implement Clean Data
- Improve validation
- Improve search UX
- Add sorting
- Improve responsive design
- Refactor JavaScript functions

These are future improvements and are not completed features in the current repository state.

## Development Roadmap

### Phase 1 — Core CRUD

- [ ] Create
- [ ] Read
- [ ] Update
- [ ] Delete
- [ ] Local Storage
- [x] Get Total

### Phase 2 — Search & Data Handling

- [ ] Search
- [ ] Validation
- [ ] Clean Data
- [ ] Count

### Phase 3 — UI / UX

- [x] Responsive Design foundation
- [x] Animations foundation
- [ ] Better Feedback
- [ ] Improved Form UX

### Phase 4 — Future Improvements

- [ ] Add future product-management features as requirements are defined

## Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Structure and product management interface |
| CSS3 | Styling, responsive UI, and animations |
| JavaScript | Application logic and data management |
| Local Storage | Planned browser-based data persistence |

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

The intended relationship between the product-management functions is:

```text
User Input
    ↓
Get Total
    ↓
Create Product
    ↓
Clean Data
    ↓
Save to Local Storage
    ↓
Read Data
    ↓
Display Products
    ↓
Edit / Delete / Search
```

This flow describes the planned application architecture. The JavaScript steps are not yet wired together in the current implementation.

## Current Status

**Project Status: 🟢 Active Development**

- **Completed features:** Product form and table structure, title/category search controls, responsive styling foundation, UI animations, and Get Total calculation.
- **Current focus:** Implementing the Create Product workflow.
- **Next planned improvements:** Add Local Storage persistence, data validation and cleaning, Read, Delete, Edit/Update, Search, and improved user feedback.