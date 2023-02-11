import React, {useState} from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
}

const Button = (props: ButtonPropsType) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }

    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};

export default Button;