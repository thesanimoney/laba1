import {useForm} from "react-hook-form";
import {Book, bookSchema} from "../schema/bookSchema.ts";
import {zodResolver} from "@hookform/resolvers/zod";
import {useState} from "react";
import useAddBook from "../hooks/useAddBook.ts";

function CreateBook() {
    const [success, setSuccess] = useState<boolean>()
    const {register, handleSubmit, formState: {errors}, reset} = useForm<Book>({
        resolver: zodResolver(bookSchema)
    })
    const {mutate, isError, error, isPending} = useAddBook()
    const onSubmit = (data: Book) => {
        mutate(data)
        reset()

        setSuccess(true)
        setTimeout(() => {
            setSuccess(false)
        }, 3000)
    }

    return <>
        {success && <div className="alert alert-success w-50" role="alert">Congrats, you have created new Book!</div>}
        {isError && <div className="alert alert-danger w-50" role="alert">Ooops, there is error..{error.message}</div>}
        <form onSubmit={handleSubmit(onSubmit)} className={'container d-flex flex-column'}>
            <div className="d-flex flex-row gap-2 w-75">
                <div className="mb-3 flex-grow-1">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input {...register('title')} type="text" className="form-control" id="title"/>
                    {errors.title && <p className={'text-danger alert-font'}>{errors.title.message}</p>}
                </div>
                <div className="mb-3 flex-grow-1">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input {...register('author')} type="text" className="form-control" id="author"/>
                    {errors.author && <p className={'text-danger alert-font'}>{errors.author.message}</p>}
                </div>
            </div>
            <div className="d-flex flex-row gap-2 w-75">
                <div className="mb-3 flex-grow-1">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input {...register('price_to_rent')} type={"number"} className="form-control" id="price"/>
                    {errors.price_to_rent && <p className={'text-danger alert-font'}>{errors.price_to_rent.message}</p>}
                </div>
                <div className="mb-3 flex-grow-1">
                    <label htmlFor="genre" className="form-label">Genre</label>
                    <input {...register('genre')} type={"text"} className="form-control" id="genre"/>
                    {errors.genre && <p className={'text-danger alert-font'}>{errors.genre.message}</p>}
                </div>
            </div>
            <div>
                <div className="mb-3 w-75">
                    <label htmlFor="author" className="form-label">Description</label>
                    <textarea {...register('description')} className="form-control" id="description"/>
                    {errors.description && <p className={'text-danger alert-font'}>{errors.description.message}</p>}
                </div>
                <button disabled={isPending} type="submit" className="btn btn-dark">Add Book</button>
            </div>
        </form>
    </>
}

export default CreateBook;