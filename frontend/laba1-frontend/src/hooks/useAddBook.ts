import {useMutation} from "@tanstack/react-query";
import {Book} from "../schema/bookSchema.ts";
import apiClient from "../api/apiClient.ts";
import {queryClient} from "../main.tsx";

function UseAddBook() {
    return useMutation({
        mutationKey: ['book'],
        mutationFn: (book: Book) => apiClient.post('/books', book).then(res => res.data),
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['books']}),
    })
}

export default UseAddBook;