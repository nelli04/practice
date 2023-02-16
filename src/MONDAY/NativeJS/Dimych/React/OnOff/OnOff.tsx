import React, {useState} from 'react';

export type OnOffType = {
   // on: boolean
}


export function OnOff (props: OnOffType) {

    console.log('OnOff rendering')


    let [on, setOn] = useState(false)
    console.log('on:' + on )
    const onStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        padding: '5px',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '30px',
        height: '20px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        padding: '5px',
        backgroundColor: on ? 'white' : 'red'
    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        marginLeft: '10px',
        backgroundColor: on ? 'green' : 'red'
    }



    return (
        <div>
            <div style={onStyle} onClick={ () => { setOn(true) } }>On</div>
            <div style={offStyle} onClick={ () => { setOn(false) } }>Off</div>
            <div style={indicatorStyle}></div>
        </div>
    )
}





























/*
type OnOffType = {
    collapsed: string
}

export function OnOff (props: OnOffType) {
    return (
        <div /!*className={on.but}*!/>
            <On title={'On'}/>
            {!props.collapsed && <Off/>}
        </div>
    )
}
type OnType = {
    title: string
}

function On (props: OnType) {
    return (
        <div /!*className={on.on}*!/>
            {props.title}
        </div>
    )
}

function Off () {
    return (
        <div /!*className={on.off}*!/>
            OFF
        </div>
    )
}
*/

