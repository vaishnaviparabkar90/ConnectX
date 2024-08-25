# ConnectX
ConnectX is a real-time chat application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This application supports features such as JWT Based user authentication, private messaging.

## Features

- **User Authentication:** Secure login and registration with JWT-based authentication.
- **Private Messaging:** Users can send messages to each other privately.
- **Typing Indicators:** See when someone is typing in a chat.
- **Notifications:** Receive notifications for new messages

## Technologies Used

- **Frontend:**
  - React.js
  - Redux
  - Bootstrap
  - Socket.io-client

- **Backend:**
  - Node.js
  - Express.js
  - Socket.io
  - MongoDB (Mongoose)
  - JWT (Json Web Tokens)

- **Real-Time Communication:**
  - WebSockets via Socket.io

## Setup and Installation

### Prerequisites

- Node.js
- MongoDB
- Git

### Steps to Run Locally

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/yourusername/ConnectX.git
   cd ConnectX
1. **Backend Setup:**

   - Navigate to the backend directory:
     ```bash
     cd backend
     ```

   - Install backend dependencies:
     ```bash
     npm install
     ```

   - Set up environment variables in a `.env` file:
     ```env
     MONGO_URI=your_mongo_db_connection_string
     JWT_SECRET=your_jwt_secret
     SOCKET_PORT=your_socket_port
     ```

   - Start the backend server:
     ```bash
     npm start
     ```

2. **Frontend Setup:**

   - Navigate to the `connectx` (frontend) directory:
     ```bash
     cd ../connectx
     ```

   - Install frontend dependencies:
     ```bash
     npm install
     ```

   - Start the React development server:
     ```bash
     npm start
     ```

3. **Access the Application:**

   - Open your browser and go to `http://localhost:3000`.