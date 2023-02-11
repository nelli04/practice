import React from 'react';

type OnOffType = {
    collapsed: string
}

export function OnOff(props: OnOffType) {
    return (
        <div /*className={on.but}*/>
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
        <div /*className={on.on}*/>
            {props.title}
        </div>
    )
}

function Off () {
    return (
        <div /*className={on.off}*/>
            OFF
        </div>
    )
}

