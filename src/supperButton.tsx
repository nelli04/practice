import React from 'react';

export type SupperButtonType = {
    callback: () => void
    name: string
}

export const SupperButton = (props: SupperButtonType) => {
    return (
        <button>{props.name}</button>
    );
};



















//-----------------------------------------------------------------------------------------------------------------------------------------------
/*

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
*/
