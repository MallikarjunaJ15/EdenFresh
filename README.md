# 🌿 EdenFresh - Product Management App

EdenFresh is a full-stack product management web application built using the MERN stack (MongoDB, Express.js, Node.js, and Vanilla JavaScript frontend).

---

## 🚀 Features

### 🔐 Authentication

* User Signup & Login
* Secure JWT-based authentication (stored in HTTP-only cookies)
* Logout functionality

### 📦 Product Management

* Create, Read, Update, Delete (CRUD) products
* Modal-based UI for adding and updating products
* Protected routes (only authenticated users can modify data)

### 🔎 Filtering

* View all products
* Filter featured products
* Filter by price (less than a value)
* Filter by rating (greater than or equal to a value)

### 🎨 UI/UX

* Clean emerald-themed UI
* Responsive layout
* Hero section for non-authenticated users
* Dashboard for authenticated users
* Modal-based forms (no page reloads)

---

## 🛠 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (Authentication)
* bcrypt (Password hashing)

### Frontend

* HTML
* CSS
* JavaScript

---

## ⚙️ Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/MallikarjunaJ15/EdenFresh
cd edenfresh
```

### 2. Install Backend Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file:

```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### 4. Run Backend

```bash
npm run dev
```

### 5. Run Frontend

Open `index.html` using Live Server (VS Code recommended)

---

## 🌐 API Endpoints

### Auth

* POST `/api/v1/auth/signup`
* POST `/api/v1/auth/login`
* POST `/api/v1/auth/logout`

### Products

* GET `/api/v1/products`
* POST `/api/v1/products` (Protected)
* PUT `/api/v1/products/:id` (Protected)
* DELETE `/api/v1/products/:id` (Protected)

### Filters

* GET `/api/v1/products/featured`
* GET `/api/v1/products/price?price=VALUE`
* GET `/api/v1/products/rating?rating=VALUE`

---

## 🔒 Security Features

* Password hashing using bcrypt
* JWT authentication
* HTTP-only cookies
* Protected routes middleware

---

## 📌 Future Improvements

* Better UI animations
* Pagination
* Search functionality
* Image upload for products

---

## 👨‍💻 Author

Mallikarjuna J

---

## ⭐ Note

This project was built as part of a Backend Internship Assignment and enhanced with a modern UI and real-world features.
