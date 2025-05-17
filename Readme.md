# 📝 MERN Blog Application

A full-stack blog application built with the MERN stack. It allows users to create, view, edit, and delete blog posts with authentication.



## 🚀 Tech Stack

- **Frontend**: React, Tailwind CSS 
- **Backend**: Node.js, Express.js
- **Database**: MongoDB (MongoDB Atlas for production)
- **Authentication**: JWT (JSON Web Token)


## 🔐 Features

- User registration and login (email & password)
- JWT-based authentication
- Create, edit, and delete blog posts (only by blog authors)
- Public blog listing page with pagination
- Responsive UI for desktop and mobile

---

## 🧪 Getting Started Locally

Follow the steps below to run the project locally.

### 1. Clone the Repository

Start by cloning the repository to your local machine:

```bash
git clone https://github.com/your-username/mern-blog-app.git
cd mern-blog-app

2. Setup the Backend (Node.js + Express)
Navigate to the backend folder:
cd server
npm install
Create a .env file for environment variables in the /server folder:
Create a .env file and add the following lines:
PORT=4000
MONGO_URI=your_mongodb_connection_string  # Replace with your MongoDB URI
JWT_SECRET=your_jwt_secret  # Secret for JWT encoding/decoding
Start the backend server:
npm start
This will start the backend server on http://localhost:4000.


3. Setup the Frontend (React)
Navigate to the frontend folder:
cd ../client
npm install
npm start
npm start
This will start the React app on http://localhost:3000.