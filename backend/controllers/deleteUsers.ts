import { Request, Response } from "express";
import User from "../schema/userSchema";

const deleteUser = async (req: Request, res: Response) => {
    const id = req.params.id
    if (!id) return res.status(404).send("Not found");

    const result = await User.findByIdAndDelete(id)
    return res.status(200).send("User deleted successfully " + result)
};

export default deleteUser;