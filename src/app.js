import express from "express";
import cors from "cors";
import morgan from "morgan";

// Create an express instance
const app = express();

// * Settings

app.set("port", process.env.PORT);

// * Middlewares

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// * Routes

export default app;
