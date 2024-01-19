import UserRoot from "../pages/userRoot"
import Home from "../pages/home"
import Add from "../pages/add"
import Basket from "../pages/basket"
import Wishlist from "../pages/wishlist"
import Detail from "../pages/detail"
const routes=[
    {
        path: "/",
        element: <UserRoot />,
        children: [
            {
              path: "/",
              element: <Home />,
             
            },
            {
                path: "/:id",
                element: <Detail />,
               
              },
              {
                path: "/add",
                element: <Add />,
               
              },
              {
                  path: "/basket",
                  element: <Basket />,
                 
                },
                {
                    path: "/wishlist",
                    element: <Wishlist />,
                   
                  },
                
          ],
    }
]


export default routes