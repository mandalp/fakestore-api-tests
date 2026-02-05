# 🧪 Fake Store API – Test Automation Project

This repository contains an automated **API test suite** for the **Fake Store API**, developed using **Cypress**, with a strong focus on **quality, maintainability, and realistic testing strategies**.

The main goal of this project is to demonstrate **QA Senior / SDET skills**, including API automation, contract validation, test architecture, and critical analysis of API behavior versus documentation.

---

## 🔗 API Reference

- Fake Store API Documentation  
  https://fakestoreapi.com/docs

---

## 🧰 Tech Stack

- Cypress
- JavaScript
- Node.js
- REST APIs
- JSON Schema validation (AJV)

---


### Structure Overview
- **e2e/**: Test suites organized by API domain
- **fixtures/**: Test data for requests
- **schemas/**: JSON Schemas for contract validation
- **support/**: Helpers and schema validators

---

## 🔐 Auth API Coverage

Endpoint:
POST /auth/login


Covered scenarios:
- Successful login with valid credentials
- Invalid password
- Invalid username
- Missing required fields
- Empty request body

Key focus:
- Status code validation
- Token existence validation
- Negative testing

---

## 👤 Users API Coverage

Endpoints:

GET /users
GET /users/{id}
POST /users
PUT /users/{id}
DELETE /users/{id}


Covered scenarios:
- Retrieve all users
- Retrieve user by ID
- Create a new user
- Update an existing user
- Delete a user
- Schema validation for all responses

Key focus:
- CRUD coverage
- JSON Schema validation
- Response structure validation

---

## 🛍️ Products API Coverage

Endpoints:

GET /products
GET /products/{id}
POST /products
PUT /products/{id}
DELETE /products/{id}


Covered scenarios:
- List all products
- Get product by ID
- Create product
- Update product
- Delete product
- Schema validation

---

## 🛒 Carts API Coverage

Endpoints:

GET /carts
GET /carts/{id}
POST /carts
PUT /carts/{id}
DELETE /carts/{id}


Covered scenarios:
- Full CRUD for carts
- Schema validation using CartItem abstraction
- Handling API inconsistencies gracefully

---

## 🧠 Important Notes

- The Fake Store API does **not persist data**.
- Some endpoints may return `200` even for non-existing resources.
- Tests are designed to be **resilient**, avoiding false negatives.
- Schema validation reflects the **actual API behavior**, not only the documentation examples.

---

## ▶️ Running the Tests

Install dependencies:
```bash
npm install
```
```bash
npx cypress run
```

🎯 Purpose

This project was created to:

- Practice and demonstrate API test automation
- Apply QA Senior / SDET best practices
- Showcase contract testing with JSON Schema
- Build a professional automation portfolio

## 👩‍💻 About the Author

This repository is part of my **professional QA Engineer portfolio**.

**Amanda Lopes**  
QA Engineer with experience in functional, exploratory, UI and API testing, focused on automation, test strategy, and delivering high-quality software through reliable and maintainable test solutions.

🔗 LinkedIn: https://www.linkedin.com/in/mandalps