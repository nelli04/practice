import React, {useState} from 'react';

export type OnOffType = {
    on: boolean
    On: (on: boolean) => void
}


export function OnOff(props: OnOffType) {

    console.log('OnOff rendering')


    console.log('on:' + props.on)

    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '5px',
        backgroundColor: props.on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: props.on ? 'green' : 'red'
    }


    return (
        <div>
            <div style={onStyle} onClick={() => {
                props.On(true)
            }}>On
            </div>
            <div style={offStyle} onClick={() => {
                props.On(false)
            }}>Off
            </div>
            <div style={indicatorStyle}></div>
        </div>
    )
}
