import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage, TableListPage, TablePage } from "./pages";

export const router = createBrowserRouter([
    {
        path: '/tasks',
        element: <TableListPage />,
    },
    {
        path: '/tasks/:uuid',
        element: <TablePage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
])