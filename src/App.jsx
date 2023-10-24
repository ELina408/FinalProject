import "./App.css";
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import {createContext} from "react";
import {authRoutes, publicRoutes} from "./routes";
import useLocalStorageState from "./hooks/useLocalStorageState";

export const AuthContext = createContext(null);

function App() {
    const [isAuth, setIsAuth] = useLocalStorageState('isAuth', false)
    const defaultUsers = JSON.stringify([]);
    const [users, setUsers] = useLocalStorageState('users', defaultUsers)
    const context = {
        auth: {
            isAuth,
            setIsAuth
        },
        users,
        setUsers
    };


    return (
        <AuthContext.Provider value={context}>
            <Navbar/>
            {isAuth && <Routes> {authRoutes.map(route => <Route key={route.id} path={route.path} Component={route.Component}/>)} </Routes>}
            {!isAuth && <Routes> {publicRoutes.map(route => <Route key={route.id} path={route.path} Component={route.Component}/>)} </Routes>}
        </AuthContext.Provider>
    );
}

export default App;
