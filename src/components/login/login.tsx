import React, { ChangeEvent, FormEvent, useState } from "react"
import { useAppDispatch } from "../../app/hooks";
import { loginAction } from "../../store/user-process/user-process-api-actions";

export const Login = () => {
    const dispatch = useAppDispatch();
    const [loginState, setLoginState] = useState({
        login: '',
        password: ''
    });

    const handleChange = (e: ChangeEvent<HTMLFormElement>) => {
        const { name, value } = e.target;
        setLoginState({
            ...loginState,
            [name]: value
        })
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(loginState);
        dispatch(loginAction({ username: loginState.login, password: loginState.password }));
    };


    return (
        <section className="d-flex flex-row justify-content-center align-items-center wrapper">
            <div className="d-flex flex-column align-items-center">
                <div>
                    <img src="logo.ico" alt="" />
                </div>
                <div>
                    <h1>Вход</h1>
                </div>
                <form onChange={handleChange} onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="login" className="form-label">Логин</label>
                        <input type="text" className="form-control" id="login" name="login" aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Пароль</label>
                        <input type="password" className="form-control" id="password" name="password" />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">Войти</button>
                    </div>
                </form>
            </div>
        </section>
    )
}