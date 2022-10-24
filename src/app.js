import express from "express";
import cors from "cors";
import morgan from "morgan";
import route from "./routes/userRoutes.js";

// Create an express instance
const app = express();

// * Settings

app.set("port", process.env.PORT);

// * Middlewares

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// * Routes

app.get("/", (req, res) => {
  res.json({ ok: true, msg: "Api Online uwu" });
});

// TODO: add news routes

app.use("/api/users", route);

export default app;
