import {useMutation} from "@tanstack/react-query";
import apiClient from "../api/apiClient.ts";
import {queryClient} from "../main.tsx";
import {User} from "../interfaces/interface.ts";

function UseAddUser() {
    return useMutation({
        mutationKey: ['user'],
        mutationFn: (user: User) => apiClient.post('/user', user).then(res => res.data),
        onSuccess: () => queryClient.invalidateQueries({queryKey: ['users']}),
    })
}

export default UseAddUser;