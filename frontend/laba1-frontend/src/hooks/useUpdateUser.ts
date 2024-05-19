import {useMutation} from "@tanstack/react-query";
import apiClient from "../api/apiClient.ts";
import {queryClient} from "../main.tsx";

function UseAddUser() {
    return useMutation({
        mutationKey: ['user'],
        mutationFn: (id: string) => apiClient.put('/user/' + id, {name: 'Test', age: 1}).then(res => res.data),
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['users']}),
    })
}

export default UseAddUser;