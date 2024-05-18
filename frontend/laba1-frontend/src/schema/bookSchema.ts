import z from "zod";

export const bookSchema = z.object({
    title: z.string().min(1, "Title is required").max(100, "Title must be less than 100 characters"),
    author: z.string().min(1, "Author is required").max(50, "Author must be less than 50 characters"),
    description: z.string().max(1024, "Description must be less than 1024 characters").min(1, "Description is required"),
    price_to_rent: z.string().refine((val) => !Number.isNaN(parseInt(val, 10)), {
    message: "Expected number, received a string"
  }),
    genre: z.string().max(50, "Genre must be less than 50 characters").min(1, "Genre is required")
})
export type Book = z.infer<typeof bookSchema>;