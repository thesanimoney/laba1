import Joi from "joi";

export interface User {
    name: string
    age: number
}

export const userSchema = Joi.object<User>({
   name: Joi.string().required().min(3).max(255),
   age: Joi.number().required().min(0),
})