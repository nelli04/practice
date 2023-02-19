import React from 'react';

type PropsType = {
    callback: () => void
    name: string

}

export const SupperButton = (props: PropsType) => {
    const buttonClickHandler = () => {
        props.callback()
    }

    return (
        <div>
        <button onClick={buttonClickHandler}>{props.name}</button>
        </div>
    );
};
