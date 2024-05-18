import {Book} from "../interfaces/interface.ts";
import useDeleteBook from "../hooks/useDeleteBook.ts";

interface CardProps {
    book: Book;
}

function Card({book}: CardProps) {
    const {mutate, error, isError} = useDeleteBook()
    const onDelete = (id: number) => {
        mutate(id)
    }

    return <>
        {isError && <div className="alert alert-danger w-50" role="alert">Ooops, there is error..{error.message}</div>}
        <div className="card" style={{maxWidth:'30%'}}>
            <img src="/books.webp" className="card-img-top" alt="..."/>
            <div className="card-body h-50 mw-50">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">{book.description}</p>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">Author: {book.author}</li>
                <li className="list-group-item">Price: ${book.price_to_rent}</li>
                <li className="list-group-item">Genre: {book.genre}</li>
            </ul>
            <div className="card-body d-flex justify-content-between align-items-center">
                <a href="#" className="card-link btn btn-dark px-4">Buy</a>
                <a onClick={() => onDelete(book.id)} className="card-link align-self-end link-secondary remove-link">Remove</a>
            </div>
        </div>
    </>
}

export default Card;