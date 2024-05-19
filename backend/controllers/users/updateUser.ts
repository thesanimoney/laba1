import {Request, Response} from "express";
import User from "../../schema/db/userSchemaMongoDB";
import validateUser from "../../schema/user/validateUser";

const updateUser = async (req: Request, res: Response) => {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).send("User not found");

    const {value, error} = validateUser(req.body);
    if (error) return res.status(400).send(error);

    user.set({
        name: value.name,
        age: value.age,
    })

    const result = await user.save()
    res.status(200).send(result)
};

export default updateUser;