import { useAppDispatch } from "../../app/hooks";
import { setMenuOpened } from "../../store/user-process/user-process-api-actions";
import { User } from "../../types/state"
import React, { FC } from "react"

type Props = {
    user: User;
};

export const UserInfo: FC<Props> = ({ user }) => {
    const dispatch = useAppDispatch();

    const handleClick = () => dispatch(setMenuOpened(true));

    return (
        <div className="d-flex align-items-center gap-3">
            {<p className="nav-link active m-0">{user.username}</p>}
            <button className='btn' onClick={handleClick}>
                <img src="./burger-menu.svg" alt="burger-menu-image" width={45} />
            </button>
        </div>
    )
};