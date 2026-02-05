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

### Execution Analysis and Findings

- **POST and PUT**
  - The API accepts invalid JSON payloads during resource creation.
  - Update operations (PUT) do not enforce payload validation.
  - The same behavior was observed for the Users endpoint.

- **DELETE**
  - No validation rules are applied when deleting resources with invalid or non-existing IDs.
  - The API may return successful responses even when the resource does not exist.

- **GET**
  - The API does not validate invalid or non-existing identifiers (e.g. string values such as `x`).
  - Requests with invalid IDs may still return successful responses instead of appropriate error codes (e.g. 404).

---


## ▶️ Running the Tests

Install dependencies:
```bash
npm install
```
```bash
npx cypress run
```

## CI - API Tests

API tests are executed automatically via [GitHub Actions](https://github.com/mandalp/fakestore-api-tests/actions/runs/21724438005/job/62662627347) on every push and pull request to the `main` branch.
The pipeline runs Cypress API tests against the public FakeStore API.


## 🎯 Purpose

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
