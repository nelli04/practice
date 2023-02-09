import React from 'react';
import on from './OnOff.module.css'


type onOffType = {
    value: true | false
}


export function OnOff(props: onOffType) {
    return (
        <div className={on.but}>
            <div className={on.on}>
                {!props.value}
                ON
            </div>
            <div className={on.off}>
                {props.value === false}
                OFF
            </div>
            <div><input type={'radio'}/></div>

        </div>
    )
}

