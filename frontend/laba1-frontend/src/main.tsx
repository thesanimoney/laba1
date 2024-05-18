import React from 'react'
import ReactDOM from 'react-dom/client'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'
import './index.css'
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import "bootstrap/dist/css/bootstrap.min.css";
import {RouterProvider} from "react-router-dom";
import router from "../routes.tsx";

export const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools/>
            <main className="main">
                <RouterProvider router={router}/>
            </main>
        </QueryClientProvider>
    </React.StrictMode>,
)
