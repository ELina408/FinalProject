import React, {useContext, useState, useEffect} from "react";
import {useNavigate} from "react-router-dom";
import {AuthContext} from "../../App";

function Login() {
    const {isAuth, setIsAuth} = useContext(AuthContext).auth;
    const {users} = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState('')

    let navigate = useNavigate();


    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const candidate = Object.fromEntries(formData);
        let usersArray = []
        if(!Array.isArray(users)){
            usersArray = JSON.parse(users)
        } else {
            usersArray = users
        }

        let isAuthorization = usersArray.some((user) => {
            return (user.email === candidate.email) && (user.password === candidate.password)
        });

        if(isAuthorization){
            setIsAuth(isAuthorization)
                return navigate("/");
        } else {
            setErrorMessage('Не верные данные авторизации или вы не зарегистрированы');
        }
    };


    const form = (
        <div className="login__body">
            <div className="login__wrapp">
                <h2 className="login__title">Войти</h2>
                <form className="login__form" onSubmit={handleSubmit}>
                    <div className="login__control">
                        <span className="login__lable">Ваш Email</span>
                        <input type="email" className="login__input" name="email" />
                    </div>
                    <div className="login__control">
                        <span className="login__lable">Ваш Password</span>
                        <input type="password" className="login__input" name="password" />
                    </div>
                    {errorMessage && (
                        <div className="login__control">
                            <div className="login__error"><small>{errorMessage}</small>
                            </div>
                        </div>)}
                    <button
                        type="submit"
                        className="login__btn login__btn_send"
                    >
                        Войти
                    </button>
                </form>
            </div>
        </div>
    );

    return (
        <>
            {!isAuth && form}
        </>
    );
}

export default Login;
