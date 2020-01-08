import React, {useState} from "react";

export const AuthPage = () => {
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const changeHandler = event => {
        setForm({...form, [event.target.name]: event.target.value })
    }

    return (
        <div className="row">
            <div className="col s6 offset-s3">
                <h1>Сократи ссылку</h1>
                <div className="card blue-grey darken-3">
                    <div className="card-content white-text">
                        <span className="card-title">Авторизация</span>

                        <div className="input-field">
                            <input placeholder="Введите email"
                                   id="email"
                                   type="text"
                                   name="email"
                                   className="my-color"
                                   onChange={changeHandler}
                                   />
                                <label htmlFor="email">Email</label>
                        </div>

                        <div className="input-field">
                            <input placeholder="Введите пароль"
                                   id="password"
                                   type="password"
                                   name="password"
                                   className="my-color"
                                   onChange={changeHandler}
                            />
                            <label htmlFor="password">Password</label>
                        </div>
                    </div>
                    <div className="card-action">
                        <button className="btn blue-grey lighten-3">Регистрация</button>
                        <button className="btn blue-grey">Войти</button>
                    </div>
                </div>
            </div>
        </div>
    )
};