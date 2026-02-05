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

## ▶️ Running the Tests

Install dependencies:
```bash
npm install
```
```bash
npx cypress run
```

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

## 🧪 Test Execution Results

All API tests were executed successfully using Cypress against the public FakeStore API through a GitHub Actions CI pipeline.

### Execution Environment
- Test Framework: Cypress (API testing)
- Execution: GitHub Actions
- Target API: https://fakestoreapi.com
- Node.js version: 18.18.x

### Results Summary
- API endpoints were successfully exercised across multiple HTTP methods (GET, POST, PUT, DELETE).
- Both positive and negative scenarios were executed.
- Schema validations were applied according to the actual API responses.
- No execution failures related to test infrastructure were observed.

### Observations
- Some tests intentionally validate unexpected but accepted API behaviors (e.g. missing validation rules).
- These behaviors are documented in the **Execution Analysis and Findings** section and are treated as known limitations of the public API rather than test failures.

---

## CI - API Tests

API tests are executed automatically via GitHub Actions on every push and pull request to the `main` branch.
The pipeline runs Cypress API tests against the public FakeStore API.

[![Cypress API Tests - FakeStore](https://github.com/mandalp/fakestore-api-tests/actions/workflows/cypress-api.yml/badge.svg)](https://github.com/mandalp/fakestore-api-tests/actions/workflows/cypress-api.yml)

---

## 🎯 Purpose

This project was created to:

- Demonstrate real-world API test automation skills
- Apply QA Senior / SDET best practices
- Validate API contracts using JSON Schema
- Perform critical analysis of API behavior and quality risks
- Build a professional, production-like automation portfolio

## 👩‍💻 About the Author

This repository is part of my **professional QA Engineer portfolio**.

**Amanda Lopes**  
QA Engineer with experience in functional, exploratory, UI and API testing, focused on automation, test strategy, and delivering high-quality software through reliable and maintainable test solutions.

🔗 LinkedIn: https://www.linkedin.com/in/mandalps
