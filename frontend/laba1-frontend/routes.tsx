import {createBrowserRouter} from "react-router-dom";
import Layout from "./src/global/Layout";
import BooksPage from "./src/pages/BooksPage.tsx";
import CreateBookPage from "./src/pages/CreateBookPage.tsx";
import UsersPage from "./src/pages/UsersPage.tsx";

const router = createBrowserRouter([
    {path: '/', element: <Layout/>, children: [
            {path: '', element: <BooksPage/>},
            {path: '/create-book', element: <CreateBookPage/>},
            {path: '/users', element: <UsersPage/>},
        ]}
]);

export default router;