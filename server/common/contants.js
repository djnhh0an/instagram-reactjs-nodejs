import dotenv from 'dotenv';
dotenv.config();

export const AUTH_URL = process.env.AUTH_URL;
export const GRAPH_URL = process.env.GRAPH_URL;
export const REDIRECT_URI = process.env.REDIRECT_URI;
export const CLIENT_ID = process.env.CLIENT_ID;
export const CLIENT_SECRET = process.env.CLIENT_SECRET;