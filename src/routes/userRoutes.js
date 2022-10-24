import { Router } from "express";
import { createNewUser } from "../controllers/userController.js";

const route = Router();

route.get("/", (req, res) => {
  res.json({ ok: true, msg: "uwu" });
});

route.post("/add", createNewUser);

export default route;
