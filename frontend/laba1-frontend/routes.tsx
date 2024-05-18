import {createBrowserRouter} from "react-router-dom";
import Layout from "./src/global/Layout";
import BooksPage from "./src/pages/booksPage";
import CreateBookPage from "./src/pages/CreateBookPage.tsx";

const router = createBrowserRouter([
    {path: '/', element: <Layout/>, children: [
            {path: '', element: <BooksPage/>},
            {path: '/create-book', element: <CreateBookPage/>},
        ]}
]);

export default router;