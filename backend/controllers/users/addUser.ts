import {Request, Response} from "express";
import User from "../../schema/db/userSchemaMongoDB";

async function AddUser(req: Request, res: Response) {
    const user = new User({
        name: req.body.name,
        age: req.body.age,
    });

    const result = await user.save()
    res.status(200).send(result)
}

export default AddUser;