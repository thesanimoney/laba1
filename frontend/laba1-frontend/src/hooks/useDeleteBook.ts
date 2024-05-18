import {useMutation} from "@tanstack/react-query";
import apiClient from "../api/apiClient.ts";
import {queryClient} from "../main.tsx";

function UseDeleteBook() {
   return useMutation({
       mutationKey: ['books'],
       mutationFn: (id: number) => apiClient.delete('/books/' + id).then(res => res.data).catch(err => err),
       onSuccess: () => queryClient.invalidateQueries({queryKey: ['books']}),
       onError: (error) => error.message
   })
}

export default UseDeleteBook;