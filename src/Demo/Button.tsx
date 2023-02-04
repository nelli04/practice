import React from 'react';

type ButtonType = {
    name: string
    callBAck: () => void
}
export function Button(props: ButtonType) {
    const onClickHandler = () => {
        props.callBAck();
    }
    return (
        <button onClick={onClickHandler}>{props.name}</button>
    )
}