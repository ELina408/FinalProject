import React, { useContext, useState } from "react";
import { AuthContext } from "../../App";
import { useNavigate } from "react-router-dom";

function Regestration() {
  const navigate = useNavigate();
  const { isAuth, setIsAuth } = useContext(AuthContext).auth;
  const { users, setUsers } = useContext(AuthContext);
  const [ExistEmail, setExistEmail] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const newUser = Object.fromEntries(formData);
    let usersArray = [];
    if (!Array.isArray(users)) {
      usersArray = JSON.parse(users);
    } else {
      usersArray = users;
    }
    let isExistEmail = usersArray.some((user) => {
      return user.email === newUser.email;
    });
    setExistEmail(isExistEmail);
    if (!isExistEmail) {
      setUsers((state) => [...state, newUser]);
      setIsAuth(true);
      navigate("/");
    }
  };

  const form = (
    <div className="regestration__body">
      <div className="regestration__wrapp">
        <h2 className="regestration__title">Регистрация</h2>
        <form className="regestration__form" onSubmit={handleSubmit}>
          <div className="regestration__control">
            <span className="regestration__lable">Ваше имя</span>
            <input type="text" className="regestration__input" name="name" />
          </div>

          <div className="regestration__control">
            <span className="regestration__lable">Ваш возраст</span>
            <input type="text" className="regestration__input" name="age" />
          </div>

          <div className="regestration__control">
            <span className="regestration__lable">Ваш Email</span>
            <input type="email" className="regestration__input" name="email" />
            {ExistEmail && (
              <div className="regestration__error">
                <small>Такой email уже существует.</small>
              </div>
            )}
          </div>
          <div className="regestration__control">
            <span className="regestration__lable">Ваш Password</span>
            <input
              type="password"
              className="regestration__input"
              name="password"
            />
          </div>
          <button
            type="submit"
            className="regestration__btn regestration__btn_send"
          >
            Отправить данные
          </button>
          <button
            type="reset"
            className="regestration__btn regestration__btn_reset"
          >
            Очистить форму
          </button>
        </form>
      </div>
    </div>
  );

  return <>{!isAuth && form}</>;
}

export default Regestration;
