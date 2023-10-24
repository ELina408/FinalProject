import React, {useContext, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../App";

function Logout() {
        const {isAuth, setIsAuth} = useContext(AuthContext).auth;
        let navigate = useNavigate();
        useEffect(() => {
                if(isAuth) {
                        setIsAuth(false);
                        return navigate("/");
                }
        })

        return <></>
}

export default Logout;
