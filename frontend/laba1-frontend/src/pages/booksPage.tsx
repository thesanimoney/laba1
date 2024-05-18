import Card from "../components/Card.tsx";
import useGetBooks from "../hooks/useGetBooks.ts";

function BooksPage() {
    const {data, isError, error} = useGetBooks()
    if (isError) return <p>{error.message}</p>

    return <>
        <div className="d-flex flex-row flex-wrap gap-4 p-2 mx-1 mt-3 w-100">
            {data && data?.map((book) => <Card key={book.id} book={book}></Card>)}
        </div>
    </>
}

export default BooksPage;