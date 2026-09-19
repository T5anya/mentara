# Mentara — Full Stack

Mentara is a student mental-wellness web application built from the supplied UI prototype and extended with a Node.js/Express + MySQL backend.

## Stack
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express.js
- Database: MySQL
- Authentication: bcrypt password hashing + JWT

## Setup
1. Install Node.js 18+ and MySQL 8+.
2. Create the database:
   - Open MySQL Workbench or the mysql CLI.
   - Run `database/schema.sql`.
   - Run `database/seed.sql`.
3. In `backend`, copy `.env.example` to `.env` and fill in your MySQL credentials.
4. In `backend`, run `npm install` then `npm start`.
5. Open `http://localhost:5000/login.html`.

## Admin
For a demo admin, promote a registered user after registration:
`UPDATE mentara.users SET role='admin' WHERE email='your-email@example.com';`
Then log in again and open `admin.html`.

## Main APIs
- POST `/api/auth/register`
- POST `/api/auth/login`
- GET/POST `/api/moods`
- GET/POST/DELETE `/api/journal`
- GET `/api/bookings/counselors`
- GET/POST `/api/bookings`
- GET `/api/resources`
- GET `/api/admin/stats`
- GET `/api/admin/users`
- GET `/api/admin/bookings`
- PATCH `/api/admin/bookings/:id`

## Important
The app is a wellness/support project, not a substitute for professional or emergency care. Crisis resources should be configured for the country where the app will be used.
