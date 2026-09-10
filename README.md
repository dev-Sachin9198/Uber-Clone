# Backend API Documentation

## `/users/register`

### Description

Registers a new user by creating a user account with the provided information.

### HTTP Method

`POST`

### Endpoint

```http
POST /users/register
```

### Request Body

The request body should be in **JSON** format and include the following fields:

| Field                | Type   | Required | Description                                  |
| -------------------- | ------ | -------- | -------------------------------------------- |
| `fullname`           | Object | Yes      | Contains the user's first and last name.     |
| `fullname.firstname` | String | Yes      | User's first name. Minimum 3 characters.     |
| `fullname.lastname`  | String | No       | User's last name. Minimum 3 characters.      |
| `email`              | String | Yes      | User's email address. Must be a valid email. |
| `password`           | String | Yes      | User's password. Minimum 6 characters.       |

### Request Example

```json
{
  "fullname": {
    "firstname": "Vishal",
    "lastname": "Yadav"
  },
  "email": "vishal@example.com",
  "password": "123456"
}
```

### Validation Rules

* `fullname.firstname` is **required** and must contain at least **3 characters**.
* `fullname.lastname` is **optional**, but if provided, it must contain at least **3 characters**.
* `email` is **required** and must be a valid email address.
* `password` is **required** and must contain at least **6 characters**.

### Response

A successful registration should return a response indicating that the user account has been created successfully.

### Example Success Response

```json
{
  "message": "User registered successfully",
  "user": {
    "fullname": {
      "firstname": "Vishal",
      "lastname": "Yadav"
    },
    "email": "vishal@example.com"
  }
}
```
