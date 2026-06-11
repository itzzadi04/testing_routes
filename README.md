# testing_routes
# People API (Practice Project)

This project is a simple Express.js API to practice CRUD operations.

## 📂 Routes

### GET
- **`GET /api/people`**
  - Returns all people in the array.


### POST
- **`POST /api/people`**
  - Adds a new person.
  - Body example:
    ```json
    {
      "id": 3,
      "name": "Alice"
    }
    ```

### PUT
- **`PUT /api/people/:id`**
  - Updates the name of an existing person.
  - Body example:
    ```json
    {
      "name": "Updated Name"
    }
    ```

### DELETE
- **`DELETE /api/people/:id`**
  - Removes a person from the array by ID.

## 🛠️ Notes
- Built with **Node.js + Express**.
- Tested using **Postman**.
- Purpose: Practice REST API basics (GET, POST, PUT, DELETE).

tested through postman
