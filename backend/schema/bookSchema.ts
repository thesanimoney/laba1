import Joi from "joi";

export interface Book {
    title: string;
    description: string;
    author: string;
    price_to_rent: number;
    genre: string;
}

export const bookSchema = Joi.object<Book>({
    title: Joi.string().required().min(3).max(45),
    description: Joi.string().required().min(10).max(1024),
    author: Joi.string().required().max(45),
    price_to_rent: Joi.number().required().max(9999999999999),
    genre: Joi.string().required().max(45),
})