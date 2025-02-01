###  📌 **Expense Tracker**
A full-stack **Expense Management** application with **User Authentication**, **Expense Tracking**, and **PDF Report Export**.  
Built with **React.js (Frontend)** and **Node.js (Backend) using MySQL 8.0**.

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
MySQL 8.0 Installed & Running
Node.js 16 Installed
NPM or Yarn installed
Create a MySQL database:
sql

# CREATE DATABASE expense_tracker;

##  📌 Configure .env for Backend
# Create a .env file in the server/ directory:

``` makefile

PORT=5000
DB_NAME=expense_tracker
DB_USER=root
DB_PASSWORD=yourpassword 
```

# 📌 Run Database Migrations (If Using Sequelize)

npx sequelize-cli db:migrate

# 📌 Run Database Migrations (If Using Sequelize)

npx sequelize-cli db:migrate

# 📌 Start the Backend Server

npm run dev

# ✅ Runs the backend on http://localhost:5000/

## 🌟 Frontend Setup (React + Bootstrap)
# 📌 Install Frontend Dependencies
Navigate to the client folder and install dependencies:

```bash

cd ../client
npm install
📌 Start the React Frontend


npm start
✅ Runs the frontend on http://localhost:3000/

🚀 Features
✅ User Authentication (Login/Signup)
✅ Add, Edit, Delete Expenses
✅ View Expenses Summary (Total Income & Expenses)
✅ Filter Transactions by Date/Category
✅ Export Expense Report to PDF 
```

## 📌 API Endpoints
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

### 🚀 Final Steps
Start MySQL Server
Run npm run dev for the backend
Run npm start for the frontend
Enjoy tracking your expenses! 🚀🔥

![Screenshot 2025-02-01 180403](https://github.com/user-attachments/assets/9651d694-6fe8-438f-9254-08675937a14a)
![Screenshot 2025-02-01 180338](https://github.com/user-attachments/assets/0f7fa950-bf39-4277-9268-9f76159bdff2)
![Screenshot 2025-02-01 180312](https://github.com/user-attachments/assets/7b92e216-6654-40fe-8280-ed7fc1b8d5c0)
