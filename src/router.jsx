import { createBrowserRouter } from "react-router-dom"
import RootLayout from "./pages/RootLayout"
import Home from "./pages/Home"
import ListItems from "./items/Listitems"
import CreateItems from "./items/CreateItems"
import ShowItems from "./items/ShowItems"
import UpdateItems from "./items/UpdateItems"
import ItemsLayout from "./items/ItemsLayout"
 const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {index:true, element: <Home />},
            {path:"items", element: <ItemsLayout/>, 
        children: [
            {index:true, element:<ListItems/>},
            {path:"new", element: <CreateItems/>},
            {path:":id", element: <ShowItems/>},
            {path:":id/update", element: <UpdateItems/>}
        ]}
        ]
    }
])

export default router