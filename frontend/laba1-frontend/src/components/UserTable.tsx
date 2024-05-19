import useGetUsers from "../hooks/useGetUsers.ts";
import generateRandomUser from "../generateRandomUser.ts";
import useAddUser from "../hooks/useAddUser.ts";
import useDeleteUser from "../hooks/useDeleteUser.ts";

function UserTable() {
    const {data, isError, error} = useGetUsers()
    const {mutate: deleteUser, isError: isErrorDelete, error: deleteError} = useDeleteUser()
    const {mutate} = useAddUser()

    const onAddUser = () => {
        const user = generateRandomUser()
        mutate(user)
    }

    const onDelete = (id: number) => {
        if (isErrorDelete) console.log(deleteError.message)
        deleteUser(id)
    }

    if (isError) return <div className="alert alert-danger" role="alert">
        Ooopps.. there is error {error.message}
    </div>

    return <>
        <table className="table table-striped w-75">
            <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Age</th>
                <th scope="col">Handle</th>
            </tr>
            </thead>
            <tbody>
            {data && data.map((user, index) => <tr key={index}>
                <th scope={'row'}>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td className={'w-50'}><div className="">
                    <div className="btn btn-secondary me-3">Update</div>
                    <div onClick={() => onDelete(user._id!)} className="btn btn-outline-danger ">Delete</div>
                </div></td>
            </tr>)}
            </tbody>
        </table>
        <button onClick={onAddUser} className="btn btn-dark">Add New User</button>
    </>
}

export default UserTable;