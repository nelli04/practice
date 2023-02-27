import React from "react";

type AccordionType = {
    collapsed: boolean
    titleV: string
    on: () => void
}

type AccordionPropsType = {
    title: string
    on: () => void
}

export function Accordion(props: AccordionType) {

        return (
            <div>
                {<AccordionTitle title={props.titleV}
                                 on={props.on}/>}
                {!props.collapsed && <AccordionBody/>}
            </div>
        )
}

function AccordionTitle(props: AccordionPropsType) {
    return (
        <h3 onClick={props.on}>{props.title}</h3>
    )
}

function AccordionBody() {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    )
}