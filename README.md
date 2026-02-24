🟢 STEP 1 — Create Backend Project
📌 1️⃣ Create a new folder

Open terminal and run:
mkdir otp-auth
cd otp-auth
mkdir backend
cd backend


📌 2️⃣ Initialize Node project
npm init -y 
This creates package.json (your project config file).

📌 3️⃣ Install required packages
npm install express cors dotenv nodemailer
npm install -D nodemon

What each does:

1.express → backend server
2.cors → allow frontend to connect
3. dotenv → read .env file
4.nodemailer → send OTP email


📌 6️⃣ Start the server
npm run dev

Now open browser:
http://localhost:5000

You should see:
Server is running

nodemon → auto restart server
