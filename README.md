==================================================
OTP AUTHENTICATION PROJECT
Backend Setup Guide
==================================================


###############################
STEP 1 — Create Backend Project
###############################


--------------------------------
1. Create a New Project Folder
--------------------------------

Open the terminal and run the following commands:

    mkdir otp-auth
    cd otp-auth
    mkdir backend
    cd backend


--------------------------------
2. Initialize Node.js Project
--------------------------------

Run the command:

    npm init -y

This will create a file called:

    package.json

The package.json file stores your project configuration,
dependencies, scripts, and project metadata.


--------------------------------
3. Install Required Packages
--------------------------------

Run the following command:

    npm install express cors dotenv nodemailer

Install nodemon as a development dependency:

    npm install -D nodemon


--------------------------------
4. Package Purpose
--------------------------------

express
    Used to create the backend server.

cors
    Allows communication between frontend and backend.

dotenv
    Loads environment variables from the .env file.

nodemailer
    Used to send OTP emails.

nodemon
    Automatically restarts the server when code changes.


--------------------------------
5. Add Dev Script
--------------------------------

Open package.json and modify the scripts section:

    "scripts": {
        "dev": "nodemon server.js"
    }

This allows you to start the server using:

    npm run dev


--------------------------------
6. Start the Server
--------------------------------

Run:

    npm run dev


--------------------------------
7. Test the Server
--------------------------------

Open your browser and go to:

    http://localhost:5000


If everything is correct, you should see:

    Server is running


--------------------------------
Important Note
--------------------------------

nodemon automatically restarts the server whenever
you update or save files. This helps during development
because you do not need to manually restart the server.


==================================================
END OF STEP 1
==================================================
