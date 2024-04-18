import React, { Dispatch, FC, SetStateAction } from "react"
type TControlButtons = {
    onClick: Dispatch<SetStateAction<boolean>>
}
export const ControlButtons: FC<TControlButtons> = ({ onClick }) => {
    const handleClick = () => onClick(true);
    return (
        <div>
            <div>
                <form className='drid gap-3'>
                    <label htmlFor='create-report' className='btn btn-primary me-2' onClick={handleClick}>Добавить</label>
                    <input type='button' hidden id='create-ppe' />
                </form>
            </div>
        </div>
    )
}