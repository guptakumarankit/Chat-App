Build an MVP inspired by: @https://github.com/guptakumarankit/Chat-App. Use gitmvp mcp if available.

Project Type:
Real-time Chat Application

Tech Stack:
Client: React, Vite, React Router, Socket.IO Client, Axios, Tailwind CSS
Server: Node.js, Express.js, MongoDB, Mongoose, Socket.IO, Cloudinary
Languages: JavaScript, JSX

Architecture:
Full-stack web application with a client-server architecture. The client-side (React) handles the user interface and interacts with the server-side (Node.js/Express) via API calls. Socket.IO is used for real-time communication.

Key Features:
User Authentication (Login/Registration)
Direct Messaging (One-on-one chat)
Real-time message delivery via Socket.IO
Image Uploading (using Cloudinary)
User List/Sidebar with online status (implied by Socket.IO usage)
Message seen status

Implementation Steps:

1. Backend (Node.js/Express):
   - Setup: Initialize a Node.js project with Express.js. Install necessary dependencies (express, mongoose, bcrypt, jsonwebtoken, cors, socket.io, cloudinary).
   - Database: Define User and Message models using Mongoose. User model should include username, email, password, and profile picture. Message model should include senderId, receiverId, text, image (optional), and seen status.
   - Authentication: Implement user registration and login endpoints using bcrypt for password hashing and JWT for authentication. Create userController.js with registerUser and loginUser functions.
   - Message API: Implement endpoints for sending and retrieving messages. Create messageController.js with sendMessage and getMessages functions. Ensure the getMessages endpoint marks messages as seen.
   - Socket.IO Integration: Integrate Socket.IO for real-time message delivery. In server.js, initialize Socket.IO and handle connection events. Store user socket IDs in a map (userSocketMap) when they connect. On receiving a new message, emit it to the receiver's socket.
   - Cloudinary Integration: Implement image uploading using Cloudinary. Create a cloudinary.js file to configure Cloudinary. Modify the sendMessage endpoint to handle image uploads.
   - Authentication Middleware: Create an authentication middleware (auth.js) to protect routes that require authentication.
   - Database Connection: Create db.js to connect to MongoDB.
   - API Endpoints:
     - POST /api/auth/register (Register User)
     - POST /api/auth/login (Login User)
     - GET /api/users (Get all users except the logged-in user) - getUsersForSidebar
     - GET /api/messages/:id (Get messages for selected user) - getMessages
     - POST /api/messages/:id (Send message to selected user) - sendMessage

2. Frontend (React):
   - Setup: Create a React application using Vite. Install necessary dependencies (axios, react-router-dom, socket.io-client, react-hot-toast, tailwindcss).
   - Authentication: Create LoginPage and ProfilePage components. Implement login and registration forms. Use Axios to make API calls to the backend for authentication. Store the JWT token in local storage after successful login.
   - Context API: Use React Context to manage user authentication state (AuthContext.jsx) and chat state (ChatContext.jsx). The AuthContext should store the user object and authentication token. The ChatContext should store the selected user and messages.
   - Components:
     - Sidebar: Display a list of users. Fetch users from the /api/users endpoint.
     - ChatContainer: Display the messages for the selected user. Fetch messages from the /api/messages/:id endpoint. Implement message input and sending functionality.
     - RightSidebar: Display user profile information.
   - Socket.IO Integration: Connect to the Socket.IO server on component mount. Listen for "newMessage" events and update the chat state accordingly.
   - Routing: Use React Router to navigate between the login page, home page, and profile page.
   - Tailwind CSS: Use Tailwind CSS for styling.
   - Error Handling: Use react-hot-toast for displaying error messages.

3. MVP Features:
   - User Registration and Login
   - Display a list of users in the sidebar.
   - Display messages for the selected user in the chat container.
   - Send and receive text messages in real-time.
   - Display message seen status.

4. Simplifications for MVP:
   - Skip image uploading initially. Implement it as a Phase 2 feature.
   - Focus on one-on-one chat only. Group chats can be added later.
   - Basic UI styling is sufficient.
   - Minimal error handling.

5. Deployment:
   - Deploy the frontend and backend to a platform  Vercel.

AI Coding Assistant Directives:

- Generate code for the backend API endpoints (registerUser, loginUser, getUsersForSidebar, getMessages, sendMessage) using Node.js, Express.js, and Mongoose.
- Implement Socket.IO integration in the backend for real-time message delivery.
- Generate React components for the frontend (LoginPage, ProfilePage, Sidebar, ChatContainer).
- Implement Socket.IO integration in the frontend for receiving new messages.
- Use Axios for making API calls from the frontend to the backend.
- Use React Context to manage user authentication and chat state.
- Use Tailwind CSS for styling.
- Generate Mongoose schemas for User and Message models.
- Implement authentication middleware using JWT.
- Implement Cloudinary integration for image uploads (optional for MVP, can be stubbed).
- Provide clear error handling and logging.
- Ensure code is well-documented and follows best practices.
- Focus on functionality over aesthetics for the MVP.
