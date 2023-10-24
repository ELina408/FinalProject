import React from "react";
import Cat from "../../assets/images/cat.jpg"

export default function MainPage() {
  return(
    <>
    <div className="divh1"><h1 className="h1">Добро пожаловать на наш сайт!</h1></div>
    <div>
      <div className="divp">
        <p className="p">Пользоваться контентом могут только зарегистрированные пользователи</p>
      </div>
      <img className="img" src={Cat} alt="кошечка"/>
    </div>
    </>
  )
}