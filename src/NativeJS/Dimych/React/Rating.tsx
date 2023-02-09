import React from "react";

type RatingType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export function Rating(props: RatingType) {
    return (
        <div>
            <Star selected={props.value > 0}/>
            <Star selected={props.value > 1}/>
            <Star selected={props.value > 2}/>
            <Star selected={props.value > 3}/>
            <Star selected={props.value > 4}/>
            <Star selected={props.value > 5}/>
        </div>
    )

    /*if (props.value === 1) {
        return (

    }
    if (props.value === 2) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>)
    }
    if (props.value === 3) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
                <Star selected={false}/>
            </div>)
    }
    if (props.value === 4) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={false}/>
            </div>)
    }
    if (props.value === 5) {
        return (
            <div>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
                <Star selected={true}/>
            </div>)
    }
    return (
        <div>
             {
            <div>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            <Star selected={false}/>
            </div>
        }
        </div>
    )*/
}

type StarType = {
    selected: boolean
}

function Star(props: StarType) {
    if (props.selected === true) {
        return <span><b>star </b></span>
    } else {
        return <span>star </span>
    }

}