import {useQuery} from "@tanstack/react-query";
import apiClient from "../api/apiClient.ts";
import {User} from "../interfaces/interface.ts";

const UseGetUsers = () => {
    return useQuery<User[]>({
        queryKey: ['users'],
        queryFn: () => apiClient.get('/users').then(res => res.data).catch(err => err)
    })
};

export default UseGetUsers;