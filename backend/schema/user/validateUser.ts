import {User, userSchema} from "./userSchema";

const validateBook = (object: User) => {
    return userSchema.validate(object)
}

export default validateBook;