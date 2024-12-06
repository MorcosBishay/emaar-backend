# Backend Task Manager API

This is a **Task Manager API** built using **Node.js**, **Express**, and **TypeScript**. It provides endpoints for managing tasks with features such as pagination, sorting, filtering, and validation. The API uses **MongoDB** as the database and ensures robust input validation using **Joi**.

---

## Features

- **Tasks Management**:
  - **Add a Task**: Create a new task with the `/api/tasks` endpoint.
  - **Get Tasks**: Fetch paginated, sorted, and filtered tasks with the `/api/tasks` endpoint.
    - Supports query parameters:
      - `page` (e.g., `1`)
      - `limit` (e.g., `10`)
      - `sortBy` (e.g., `'created_at'`)
      - `sortOrder` (e.g., `'desc'`)
      - `completed` (e.g., `true` or `false`)
  - **Update a Task**: Update an existing task by ID using the `/api/tasks/:id` endpoint.
  - **Delete a Task**: Delete a task by ID using the `/api/tasks/:id` endpoint.

- **Validation**:
  - Middleware validation for **request bodies**, **query parameters**, and **path parameters** using **Joi**.
  - Ensures data integrity and consistent API behavior.

- **Pagination and Sorting**:
  - Built-in support for paginating and sorting tasks to enhance performance and usability.

- **Database**:
  - Powered by **MongoDB**, providing a reliable and scalable database for task storage.

---

## API Endpoints

### 1. **Get Tasks**
- **Endpoint**: `/api/tasks`
- **Method**: `GET`
- **Query Parameters**:
  - `page`: Page number.
  - `limit`: Number of tasks per page.
  - `sortBy`: Field to sort by.
  - `sortOrder`: Sorting order (`asc` or `desc`).
  - `completed`: Filter by completion status (`true` or `false`).

### 2. **Add a Task**
- **Endpoint**: `/api/tasks`
- **Method**: `POST`

### 3. **Update a Task**
- **Endpoint**: `/api/tasks/:id`
- **Method**: `PUT`

### 4. **Delete a Task**
- **Endpoint**: `/api/tasks/:id`
- **Method**: `DELETE`

---

## Tech Stack

- **Node.js**: Backend runtime environment.
- **Express**: Web framework for route handling and middleware.
- **TypeScript**: Type-safe development for better scalability.
- **Joi**: Schema-based validation for request bodies, queries, and params.
- **MongoDB**: NoSQL database for storing tasks.
- **Vercel**: For seamless deployment and hosting.

---

## Prerequisites

Ensure you have the following installed on your machine:

1. **Node.js**: Version `>=22.x`.
2. **Yarn**: Latest stable version.

---

## Steps to Run the Project Locally

1.  Create a .env file the root directory of the project

2.  Add this line to it
  `MONGO_URI=mongodb+srv://dbUser:dbPassword@emaar-cluster.abvrr.mongodb.net/emaar?retryWrites=true&w=majority&appName=Emaar-Cluster`

4.  Install dependencies:
   `yarn install`

5. Start the development server:
   `yarn dev`

6. The API will be available at:
   `http://localhost:4000/`

---

## Deployment

This project is deployed using **Vercel**. You can access the live API at:

[Live API URL](https://emaar-backend-morcosbishay-morcos-bishays-projects.vercel.app/)

