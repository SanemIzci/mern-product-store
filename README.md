# MERN Product Store 🛒

A full-stack product management application built using the MERN (MongoDB, Express, React, Node.js) stack. This project allows users to create, view, update, and delete products.

---

## Features

- **Frontend**: Built with React and TailwindCSS for a responsive and modern UI.
- **Backend**: Powered by Express.js and MongoDB for a robust API.
- **State Management**: Zustand is used for efficient state management.
- **Dark Mode**: Toggle between light and dark themes.
- **CRUD Operations**: Perform Create, Read, Update, and Delete operations on products.

---

## Project Structure

### Backend

- **`backend/server.js`**: Entry point for the backend server.
- **`backend/config/db.js`**: MongoDB connection configuration.
- **`backend/model/Product.js`**: Mongoose schema for the `Product` model.
- **`backend/controllers/ProductController.js`**: Controller functions for handling product-related API requests.
- **`backend/routes/products.js`**: Express routes for product-related endpoints.

### Frontend

- **`frontend/src/main.jsx`**: Entry point for the React application.
- **`frontend/src/App.jsx`**: Main application component with routing.
- **`frontend/src/components/Navbar.jsx`**: Navigation bar with dark mode toggle and links.
- **`frontend/src/components/ProductCard.jsx`**: Component for displaying individual product cards.
- **`frontend/src/pages/HomePage.jsx`**: Home page displaying all products.
- **`frontend/src/pages/CreatePage.jsx`**: Page for creating new products.
- **`frontend/src/store/product.js`**: Zustand store for managing product state.
- **`frontend/src/styles/tailwind.css`**: TailwindCSS configuration for styling.

---

## Installation

### Prerequisites

- **Node.js**: Version 16 or later.
- **MongoDB**: Running locally or a cloud instance.

### Backend Setup

1. Navigate to the `backend` directory:
    ```bash
    cd backend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Create a `.env` file in the root of the `backend` directory and add the following:
    ```env
    MONGO_URI=<your_mongodb_connection_string>
    PORT=5000
    ```
4. Start the backend server:
    ```bash
    npm run dev
    ```

### Frontend Setup

1. Navigate to the `frontend` directory:
    ```bash
    cd frontend
    ```
2. Install dependencies:
    ```bash
    npm install
    ```
3. Start the frontend development server:
    ```bash
    npm run dev
    ```

---

## Usage

1. Open your browser and navigate to [http://localhost:5173](http://localhost:5173) to access the frontend.
2. Use the navigation bar to create new products or view the list of existing products.
3. Perform CRUD operations on products directly from the UI.

---

## API Endpoints

**Base URL**: `/api/products`

- **GET `/`**: Fetch all products.
- **POST `/`**: Create a new product.
- **PUT `/:id`**: Update a product by ID.
- **DELETE `/:id`**: Delete a product by ID.

---

## Technologies Used

### Frontend

- React
- TailwindCSS
- Zustand
- React Router

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
