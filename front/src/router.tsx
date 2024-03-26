import { createBrowserRouter } from "react-router-dom";
import { NotFoundPage, TableListPage } from "./pages";

export const router = createBrowserRouter([
    {
        path: '/tasks',
        element: <TableListPage />,
    },
    {
        path: '*',
        element: <NotFoundPage />,
    },
])