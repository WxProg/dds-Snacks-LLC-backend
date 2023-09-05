# D&D's Snacks LLC Backend

This repository contains the backend code for the D&D's Snacks LLC application. It's crafted with Express.js, connects to a MongoDB database, and provides API endpoints for user registration and more.

## Features

- **Express Server**: A robust setup with middleware support, including `cors` and JSON body parsing.
- **Mongoose Integration**: Streamlined MongoDB database connections and schema declarations.
- **User Registration**: An API endpoint that allows for user registrations, complete with password hashing using `bcrypt`.

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation & Setup

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/WxProg/D-D-s-Snacks-LLC-backend.git
   cd D&D's-Snacks-LLC-backend
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Environment Variables**:

   Before running the server, you'll need to set up your environment variables. Create a `.env` file in the root directory and fill in your configurations:

   ```
   MONGODB_DATABASE_URL=your_mongodb_connection_string
   PORT=5000
   ```

   Make sure to replace `your_mongodb_connection_string` with your actual MongoDB connection string.

4. **Run the Server**:

   ```bash
   npm start
   ```

Your server should now be running at `http://localhost:5000/`.

### API Endpoints

#### User Registration

- **Endpoint**: `/users/signup`
- **Method**: `POST`
- **Data**: 

  ```json
  {
      "fName": "First Name",
      "lName": "Last Name",
      "email": "user@example.com",
      "password": "securepassword"
  }
  ```

## Contributing

If you'd like to contribute, please fork the repository and make changes as you'd like. Pull requests are warmly welcome.

## License

This project is open source and available under the [MIT License](LICENSE).
