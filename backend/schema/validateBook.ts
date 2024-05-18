import {Book, bookSchema} from "./bookSchema";

const validateBook = (object: Book) => {
    return bookSchema.validate(object)
}

export default validateBook;