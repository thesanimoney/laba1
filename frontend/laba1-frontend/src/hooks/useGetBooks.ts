import {useQuery} from "@tanstack/react-query";
import apiClient from "../api/apiClient.ts";
import {Book} from "../interfaces/interface.ts";

const useGetBooks = () => {
    return useQuery<Book[]>({
        queryKey: ['books'],
        queryFn: () => apiClient.get<Book[]>('/books').then(res => res.data).catch(err => err),
    })
}

export default useGetBooks;