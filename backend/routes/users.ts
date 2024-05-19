import express from "express";
import getUsers from "../controllers/getUsers";
import addUser from "../controllers/addUser";
import deleteUser from "../controllers/deleteUsers";

export const userRouter = express.Router();

userRouter.get("/api/users", async (req, res) => {
   return getUsers(req, res);
})

userRouter.post("/api/user", async (req, res) => {
   return addUser(req, res);
})

userRouter.delete("/api/user/:id", async (req, res) => {
   return deleteUser(req, res);
})
