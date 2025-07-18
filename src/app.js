import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';    
const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN, // Allow requests from the client URL specified in .env
    credentials: true, // Allow cookies to be sent with requests
}));

//thses 3 are major configurations for express app
app.use(express.json({limit:"10kb"})); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true, limit: "10kb" })); // Parse URL-encoded request bodies
app.use(express.static('public')); // Serve static files from the 'public' directory
app.use(cookieParser()); // Parse cookies from request headers  
//app.use(express//)

// routes import
import userRoutes from './routes/user.routes.js'; // Import user routes

//routes declaration
app.use("/api/v1/users", userRoutes); // Use user routes for requests to /users


//http://localhost:8000/api/v1/users/register
export default app; // Export the app instance for use in other modules 