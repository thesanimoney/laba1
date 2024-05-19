import express from "express";
import getUsers from "../controllers/users/getUsers";
import addUser from "../controllers/users/addUser";
import deleteUser from "../controllers/users/deleteUsers";
import updateUser from "../controllers/users/updateUser";

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

userRouter.put("/api/user/:id", async (req, res) => {
   return updateUser(req, res);
})
