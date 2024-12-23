Frontend Setup

1. Navigate to the frontend directory:

cd ../frontend

2. Install dependencies:
   npm install

3. Create a .env file in the frontend directory and add the following environment variable:
   VITE_BASE_URL=http://localhost:4000
4. Start the frontend development server:
   npm run dev

API Endpoints

User Routes

POST /api/users/register: Register a new user
POST /api/users/login: Login a user
GET /api/users/logout: Logout a user

Post Routes
POST /api/posts/create: Create a new post
GET /api/posts/all-posts: Get all posts
GET /api/posts/:id: Get a post by ID
PUT /api/posts/:id: Update a post by ID
DELETE /api/posts/:id: Delete a post by ID

Deployment

Backend Deployment
1.Set up a server (e.g., AWS, Heroku, DigitalOcean).

2.Install Node.js and MongoDB on the server.

3.Clone the repository and navigate to the backend directory.

4.Set up environment variables as described in the Backend Setup section.

5.Install dependencies and start the server:
npm install
npm start
Frontend Deployment

1. Build the frontend application:
   npm run build
2. deploy to a static site hosting service (e.g., Vercel, Netlify).

Usage
1.Register a new user.
2.Login with the registered user credentials.
3.Create, read, update, and delete blog posts.
4.View generated summaries for blog posts.
