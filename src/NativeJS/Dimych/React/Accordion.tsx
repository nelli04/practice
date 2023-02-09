import React from "react";

type AccordionType = {
    collapsed: boolean
    titleV: string
}

type AccordionPropsType = {
    title: string
}

export function Accordion(props: AccordionType) {

        return (
            <div>
                <AccordionTitle title={props.titleV}/>
                {!props.collapsed && <AccordionBody/>}
            </div>
        )
}


function AccordionTitle(props: AccordionPropsType) {
    return (
        <h3>{props.title}</h3>
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