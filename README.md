# 🌿 EdenFresh - Product Management App

EdenFresh is a full-stack product management web application built using the **MERN stack (MongoDB, Express.js, Node.js)** with a deployed frontend and backend.

---

## 🌐 Live Demo

* 🔗 **Frontend (Hosted App):**
  https://eden-fresh.vercel.app

* 🔗 **Backend (API Server):**
  https://edenfresh-production.up.railway.app

---

## 🚀 Features

### 🔐 Authentication

* User Signup & Login
* JWT-based authentication (stored in HTTP-only cookies)
* Secure session handling
* Logout functionality

### 📦 Product Management

* Create, Read, Update, Delete (CRUD) products
* Protected routes (only authenticated users)
* Modal-based UI (no page reloads)

### 🔎 Filtering

* View all products
* Filter featured products
* Filter by price (less than value)
* Filter by rating (greater than or equal to value)

### 🎨 UI/UX

* Clean emerald-themed UI
* Responsive design
* Dashboard-based layout
* Hero section for unauthenticated users

---

## 🛠 Tech Stack

### Backend

* Node.js
* Express.js
* MongoDB (Mongoose)
* JWT (Authentication)
* bcrypt (Password hashing)
* CORS & Cookie handling

### Frontend

* HTML
* CSS
* JavaScript (Vanilla)

---

## ⚙️ Setup Instructions (Local Development)

### 1. Clone the Repository

```bash
git clone https://github.com/MallikarjunaJ15/EdenFresh
cd EdenFresh
```

### 2. Install Backend Dependencies

```bash
npm install
```

### 3. Setup Environment Variables

Create a `.env` file in the server folder:

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

Open `client/index.html` using Live Server (VS Code recommended)

---

## 🌐 API Endpoints

### Auth

* `POST /api/v1/auth/signup`
* `POST /api/v1/auth/login`
* `POST /api/v1/auth/logout`

### Products

* `GET /api/v1/products`
* `POST /api/v1/products` (Protected)
* `PUT /api/v1/products/:id` (Protected)
* `DELETE /api/v1/products/:id` (Protected)

### Filters

* `GET /api/v1/products/featured`
* `GET /api/v1/products/price?price=VALUE`
* `GET /api/v1/products/rating?rating=VALUE`

---

## 🔒 Security Features

* Password hashing using bcrypt
* JWT authentication
* HTTP-only cookies
* Protected routes middleware
* CORS configured for production

---

## 🚀 Deployment

* **Frontend:** Vercel
* **Backend:** Railway
* **Database:** MongoDB Atlas

---

## 📌 Future Improvements

* Pagination
* Search functionality
* Image upload support
* Role-based access (Admin/User)
* UI animations

---

## 👨‍💻 Author

**Mallikarjuna J**

---

## ⭐ Note

This project was built as part of a **Backend Internship Assignment** and enhanced with real-world features like authentication, protected routes, and deployment.

---
