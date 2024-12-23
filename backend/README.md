# Inkspire

Inkspire is a full-stack web application that allows users to create, read, update, and delete blog posts. The application uses React for the frontend and Node.js with Express for the backend. MongoDB is used as the database.

## Table of Contents

- [Features](#features)
- [Technologies](#technologies)
- [Installation](#installation)
- [API Endpoints](#api-endpoints)
- [Deployment](#deployment)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

- User authentication (register, login, logout)
- Create, read, update, and delete blog posts
- Generate summaries for blog posts using OpenAI
- Responsive design with Tailwind CSS

## Technologies

- Frontend: React, Tailwind CSS, Axios
- Backend: Node.js, Express, MongoDB, Mongoose, JWT, bcrypt
- AI Services: OpenAI

## Installation

### Prerequisites

- Node.js
- npm or yarn
- MongoDB

### Backend Setup

1. Clone the repository:

   ```sh
   git clone <repository-url>
   cd backend
   ```

2. Install dependencies:

3. Create a .env file in the backend directory and add the following environment variables:

OPENAI_API_KEY=your_openai_api_key
MONGODB_URI=your_mongodb_uri
PORT=4000
JWT_SECRET=your_jwt_secret

4. Start the backend server:
   npm run dev
