# 📌 **Expense Tracker**
A full-stack **Expense Management** application with **User Authentication**, **Expense Tracking**, and **PDF Report Export**.  
Built with **React.js (Frontend)** and **Node.js (Backend) using MySQL 8.0**.

Clone the project

```bash
  git clone https://github.com/Priyanshu9898/Expense-Tracker-App
```

---

## 📁 **Project Structure**
```bash
expense-tracker-demo/  
├── client/         # **React Frontend**  
├── server/         # **Node.js Backend (Express + MySQL)**  
├── README.md       # **Setup Instructions**
  ```

## 🚀 Backend Setup (Node.js + Express + MySQL 8.0)
# 📌 Prerequisites
```bash 
MySQL 8.0 Installed & Running
Node.js 16 Installed
NPM or Yarn installed
Create a MySQL database:
sql
Copy
Edit
CREATE DATABASE expense_tracker;

📌 Configure .env for Backend
Create a .env file in the server/ directory:

makefile
Copy
Edit
PORT=5000
DB_NAME=expense_tracker
DB_USER=root
DB_PASSWORD=yourpassword
DB_HOST=localhost
JWT_SECRET=your_jwt_secret
```

# 📌 Run Database Migrations (If Using Sequelize)
bash
Copy
Edit
npx sequelize-cli db:migrate

# 📌 Run Database Migrations (If Using Sequelize)
bash
Copy
Edit
npx sequelize-cli db:migrate

# 📌 Start the Backend Server
bash
Copy
Edit
npm run dev

# ✅ Runs the backend on http://localhost:5000/

## 🌟 Frontend Setup (React + Bootstrap)
📌 Install Frontend Dependencies
Navigate to the client folder and install dependencies:

```bash
Copy
Edit
cd ../client
npm install
📌 Start the React Frontend

Edit
npm start
✅ Runs the frontend on http://localhost:3000/
```

# 🚀 Features
✅ User Authentication (Login/Signup)
✅ Add, Edit, Delete Expenses
✅ View Expenses Summary (Total Income & Expenses)
✅ Filter Transactions by Date/Category
✅ Export Expense Report to PDF

# 📌 API Endpoints
Method Endpoint Description
POST /api/auth/register Register a new user
POST /api/auth/login Login a user
POST /api/v1/addTransaction Add a transaction
POST /api/v1/getTransaction Get all transactions
DELETE /api/v1/deleteTransaction/:id Delete a transaction
PUT /api/v1/updateTransaction/:id Update a transaction

## 🎯 Technologies Used
Frontend:
✅ React.js
✅ React Bootstrap
✅ Axios
✅ Moment.js
✅ jsPDF (for PDF Export)
✅ React Toastify (Notifications)
✅ React Router DOM (Routing)
Backend:
✅ Node.js (v16)
✅ Express.js
✅ MySQL 8.0 (via Sequelize ORM)
✅ JWT Authentication
✅ bcrypt.js (Password Hashing)
✅ dotenv (Environment Variables)

# 🚀 Final Steps
Start MySQL Server
Run npm run dev for the backend
Run npm start for the frontend
Enjoy tracking your expenses! 🚀🔥
