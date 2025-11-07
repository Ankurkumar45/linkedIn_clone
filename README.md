# LinkedIn Clone (Starter) - MERN Stack

## Overview
Simple social feed app: signup/login, create posts, view feed.

## Stack
- Frontend: React (Vite)
- Backend: Node.js, Express
- Database: MongoDB (Mongoose)
- Auth: JSON Web Tokens (JWT)
- Password hashing: bcrypt

## Run locally
### Backend
cd backend
npm install
create .env with:
MONGO_URI=mongodb+srv://ankurkumardwivedi779_db_user:<db_password>@cluster0.rtyv40y.mongodb.net/?appName=Cluster0
JWT_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWUsImlhdCI6MTUxNjIzOTAyMn0.KMUFsIDTnFmyG3nMiGM6H9FNFUROf3wh7SmqJp-QV30
npm run dev

### Frontend
cd frontend
npm install
create .env with:
VITE_API_BASE=http://localhost:5000/api
npm run dev

## Deploy
- Backend: deployed to Render.
- Frontend: deployed to Vercel.

## Features
- Signup / Login (JWT)
- Create post (text)
- Public feed showing posts from users (latest first)

## Optional improvements
- Like / comment
- Edit/delete post
- Upload images (S3 / Cloudinary)
- Pagination or infinite scroll
