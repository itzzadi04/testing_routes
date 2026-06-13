# People API (Express + Router)

This project is a simple Express.js API to practice CRUD operations, using a dedicated router (`learn.js`) for cleaner structure and basic error handling.

## 📂 Project Structure
- **learn.js** → Main entry point, mounts the router at `/api/people`.
- **routes/people.js** → Defines all CRUD routes for the people dataset.
- **data.js** → Holds the `people` array.

## 🚀 Routes

### GET
- **`GET /api/people`**
  - Returns all people in the array using `res.json()`.

### POST
- **`POST /api/people/:id`**
  - Adds a new person if the ID does not already exist.
  - Body example:
    ```json
    {
      "name": "Alice"
    }
    ```
  - Responses:
    - `"done"` → person added
    - `"this id exists"` → duplicate ID error

### PUT
- **`PUT /api/people/:id`**
  - Updates the name of an existing person.
  - Body example:
    ```json
    {
      "name": "Updated Name"
    }
    ```
  - Responses:
    - `"done"` → update successful
    - `"id is not found"` → invalid ID error

### DELETE
- **`DELETE /api/people/:id`**
  - Removes a person from the array by ID.
  - Responses:
    - `"done"` → deletion successful
    - `"id is not found"` → invalid ID error

## ⚠️ Error Handling
- Duplicate IDs in `POST` → `"this id exists"`
- Non-existent IDs in `PUT` or `DELETE` → `"id is not found"`
- All routes return clear string messages using `res.send()` or `res.json()`.
- Example pattern:
  ```js
  if (!singlepeople) {
    return res.send("id is not found");
  }
