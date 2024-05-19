import {Request, Response} from "express";
import User from "../../schema/db/userSchemaMongoDB";

async function GetUsers(req: Request, res: Response) {
    const result = await User.find()
    return res.send(result)
}

export default GetUsers;