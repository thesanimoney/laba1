export interface Book {
    id: number;
    title: string;
    description: string;
    author: string;
    price_to_rent: number;
    genre: string;
}

export interface User {
    name: string
    age: number
    _id?: string
}