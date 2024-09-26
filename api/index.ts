// Import Dotenv
require("dotenv").config();
// Import Express
import express, { Request, Response, NextFunction } from "express";
import genericError from "./middleware/genericError";
import notFound from "./middleware/notFound";
import home from "./routes/home";


// Import CORS
const cors = require("cors");


// create an express application
const app = express();

// define a port
const PORT = process.env.PORT;

// Define our Middleware
// Use CORS Middleware
const corsOptions = {
  origin: process.env.TYPESCRIPT_CLIENT,
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

app.use(cors(corsOptions));

// Use JSON middleware to parse request bodies
app.use(express.json());

// Define our Routes
// Home Route
app.get("/", home);


// Error Handling
// Generic Error Handling
app.use(genericError);

// 404 Resource not found Error Handling
app.use(notFound);

// make the server listen on our port
const server = app.listen(PORT, () => {
  console.log(`The server is running on http://localhost:${PORT}`);
});

// export our app for testing
module.exports = app;