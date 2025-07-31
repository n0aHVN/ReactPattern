import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Compound from "./compound";
import HOCs from "./HOC/HOCs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
    },
    {
        path: "/compound",
        element: <Compound />,
    },
    {
        path: "/hoc",
        element: <HOCs />,
    }
])