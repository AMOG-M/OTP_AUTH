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
```
otp-auth/
└── backend/
    ├── server.js        # Main server file
    ├── package.json     # Node project configuration
    ├── node_modules/    # Installed packages
    └── .env             # Environment variables
```

---


---
## 🚀 Getting Started

Follow the steps below to run the project locally on your computer.

### ✅ Prerequisites

#### 📦 Step 1: Install Node.js (Very Important)

This project uses **Node.js**, which allows JavaScript to run outside the browser.

#### 👉 How to download and install Node.js

1. Open your web browser
2. Go to: **https://nodejs.org**
3. Download the **LTS (Recommended)** version
4. Open the downloaded file
5. Install it using **Next → Next → Finish**

⚠️ **Important:**  
Do **NOT** change any default settings during installation.


#### ✅ Step 2: Verify Installation

After installing Node.js, make sure it was installed correctly.

#### 🔹 On Windows

1. Press **Windows + R**
2. Type `cmd` and press **Enter**

#### 🔹 On macOS / Linux

1. Open **Terminal**
Now type the following commands **one by one**:
```bash
node -v
npm -v
```
✔ If version numbers appear (example: v18.17.0), the installation was successful.

❌ If not, restart your system and try again.

---

## ⚙️ Installation
### 1️⃣ Get the Project Code
#### Option 1 : 📥 Download the Project
1. Click the **Code** button on this repository
2. Select **Download ZIP**
3. Extract the ZIP file
After extracting, open the folder named `OTP_AUTH`.

#### Option 2 :  Clone the Repository

Open your terminal and run the following commands:
```bash
https://github.com/AMOG-M/OTP_AUTH.git
cd OTP_AUTH
```

###2️⃣ Initialize Node Project
```bash
npm init -y
```

###3️⃣ Install Required Packages
```bash
npm install express cors dotenv nodemailer
npm install -D nodemon
```

###4️⃣ Add Dev Script in package.json

Open package.json and add a dev script:

"scripts": {
  "dev": "nodemon server.js"
}


###5️⃣ Start the Server

##Run:
```bash
npm run dev
```
