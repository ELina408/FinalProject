import MainPage from "./components/MainPage/MainPage";
import Second from "./components/elements/Second";
import Thirt from "./components/elements/Thirt";
import Regestration from "./components/Auth/Regestration";
import Login from "./components/Auth/Login";
import Logout from "./components/Auth/Logout";

export const authRoutes = [
    {id: 1, path: '/', Component: MainPage},
    {id: 2, path: '/second', Component: Second},
    {id: 3, path: '/thirt', Component: Thirt},
    {id: 4, path: '/logout', Component: Logout},
]

// Список страниц для всех пользователей
export const publicRoutes = [
    {id: 1, path: '/', Component: MainPage},
    {id: 2, path: '/regestration', Component: Regestration},
    {id: 3, path: '/login', Component: Login},

]
