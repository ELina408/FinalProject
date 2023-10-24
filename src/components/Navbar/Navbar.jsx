import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {AuthContext} from "../../App";

export default function Navbar() {
    const {isAuth} = useContext(AuthContext).auth;

    const routesPublic = [
        {id:1, srs: '/', title: 'Главная'},
        {id:2, srs: '/login', title: 'Войти'},
        {id:3, srs: '/regestration', title: 'Регистрация'},
    ]
    const routesAuth = [
        {id:1, srs: '/', title: 'Главная'},
        {id:2, srs: '/second', title: 'NBA'},
        {id:3, srs: '/thirt', title: 'Чат'},
        {id:4, srs: '/logout', title: 'Выйти'},
    ]

    return (
        <div className="NavbarWrapp">
            <div className="logo">Polina Cat</div>
            <ol className="Navbar">
                {!isAuth
                    && routesPublic.map(link => (
                        <li className="li" key={link.id}>
                            <Link to={link.srs}>{link.title}</Link>
                        </li>
                    ))
                }
                {isAuth
                    && routesAuth.map(link => (
                        <li className="li" key={link.id}>
                            <Link to={link.srs}>{link.title}</Link>
                        </li>
                    ))
                }
            </ol>
        </div>
    );
}
