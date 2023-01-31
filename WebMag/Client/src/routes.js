import Admin from "./pages/Admin";
import {SHOP_ROUTE,DEVICE_ROUTE,ADMIN_ROUTE,LOGIN_ROUTE, BASKET_ROUTE, REGISTRATION_ROUTE} from "./utils/consts";
import Basket from "./pages/Basket";
import DevicePage from "./pages/DevicePage";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
export const authRoutes=[
    {
        path:ADMIN_ROUTE,
        Component: <Admin/>
    },
    {
        path:BASKET_ROUTE+'/:id',
        Component:<Basket/>
    }

]
export const publicRoutes=[
    {
        path:SHOP_ROUTE,
        Component:<Shop/>
    },
    {
        path:LOGIN_ROUTE,
        Component:<Auth/>
    },
    {
        path:REGISTRATION_ROUTE,
        Component:<Auth/>
    },
    {
        path:DEVICE_ROUTE+'/:id',
        Component:<DevicePage/>
    }
]