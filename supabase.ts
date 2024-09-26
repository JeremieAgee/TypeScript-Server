// Import Dotenv
require("dotenv").config();
// Import Axios and create an instance
import axios, { AxiosInstance } from "axios";

// Type for Axios instance configuration (optional but recommended for type safety)
const instance: AxiosInstance = axios.create({
  baseURL: `${process.env.SUPABASE_URL}/rest/v1`, // Ensure SUPABASE_URL is in the .env file
  timeout: 1500, // Set a timeout of 1500ms
  headers: {
    apikey: process.env.SUPABASE_KEY as string, // Ensure SUPABASE_KEY is in the .env file
    Authorization: `Bearer ${process.env.SUPABASE_KEY}` as string, // Use template literal for better readability
  },
});

// Export the Axios instance for use in other files
export default instance;