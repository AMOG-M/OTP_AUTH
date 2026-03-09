# 🟢 OTP AUTHENTICATION BACKEND

A simple **OTP-based authentication backend** built with **Node.js** and **Express**.  
This project demonstrates sending OTPs via email and setting up a clean backend server for authentication.

Designed for **beginners and developers** who want to implement OTP login systems.

---

## 🚀 Features

- 🔹 Express backend server  
- 🔹 CORS enabled for frontend communication  
- 🔹 Environment variables using `.env`  
- 🔹 Send OTPs via email using Nodemailer  
- 🔹 Automatic server reload during development with Nodemon  
- 🔹 Beginner-friendly and easy to understand  

---

## 🗂 Project Structure
otp-auth/
├── backend/
│ ├── server.js # Main server file
│ ├── package.json # Node project configuration
│ ├── node_modules/ # Installed packages
│ └── .env # Environment variables


---

## 🛠 Step 1 — Setup Backend

### 1️⃣ Create Project Folder

Open the terminal and run:

```bash
mkdir otp-auth
cd otp-auth
mkdir backend
cd backend
```

2️⃣ Initialize Node Project
``` bash
npm init -y
```

3️⃣ Install Required Packages
```bash
npm install express cors dotenv nodemailer
npm install -D nodemon
```
