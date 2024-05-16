import { AppRoutes } from "../../../const";
import { useAppDispatch } from "../../app/hooks";
import { logoutAction } from "../../store/user-process/user-process-api-actions";
import { User } from "../../types/state"
import React, { FC, Fragment } from "react"

type Props = {
    user: User;
}

export const UserInfo: FC<Props> = ({ user }) => {
    const dispatch = useAppDispatch();

    const handleLogout = () => {
        dispatch(logoutAction());
    };

    return (
        <div className="d-flex align-items-center gap-3">
            <a className="nav-link active" href={AppRoutes.Profile}>{user.username}</a>
            <button className="btn btn-outline-success btn-enter" type="button" onClick={handleLogout}>Выход</button>
        </div>
    )
};