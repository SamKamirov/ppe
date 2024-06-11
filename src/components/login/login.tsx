import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { loginAction } from "../../store/user-process/user-process-api-actions";
import { redirect, useNavigate } from "react-router-dom";
import { AppRoutes } from "../../../const";
import { getUser } from "../../store/user-process/user-process-selectors";

export const Login = () => {
    const user = useAppSelector(getUser);
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate(AppRoutes.Root);
        }
    }, [user])

    const loginRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loginRef.current && passwordRef.current) {
            dispatch(loginAction({ username: loginRef.current.value, password: passwordRef.current.value }));
        };
        navigate(AppRoutes.Root);
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
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="login" className="form-label">Логин</label>
                        <input type="text" className="form-control" id="login" name="login" aria-describedby="login" required ref={loginRef} />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Пароль</label>
                        <input type="password" className="form-control" id="password" name="password" required ref={passwordRef} />
                    </div>
                    <div className="d-grid gap-2">
                        <button type="submit" className="btn btn-primary">Войти</button>
                    </div>
                </form>
            </div>
        </section>
    )
}