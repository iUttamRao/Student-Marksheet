import { createBrowserRouter } from "react-router-dom";
import { DEFAULT, MARKSHEET } from "./keys";
import { Details, Marksheet } from "../page";

const router = createBrowserRouter([
    {
        path : DEFAULT,
        element : <Details />
    },
    {
        path : MARKSHEET,
        element : <Marksheet />
    }
])

export default router;