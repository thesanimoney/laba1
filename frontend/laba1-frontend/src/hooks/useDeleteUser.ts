import {useMutation} from "@tanstack/react-query";
import apiClient from "../api/apiClient.ts";
import {queryClient} from "../main.tsx";

function UseDeleteUser() {
   return useMutation({
       mutationKey: ['user'],
       mutationFn: (id: number) => apiClient.delete('/user/' + id).then(res => res.data).catch(err => err),
       onSuccess: () => queryClient.invalidateQueries({queryKey: ['users']}),
       onError: (error) => error.message
   })
}

export default UseDeleteUser;