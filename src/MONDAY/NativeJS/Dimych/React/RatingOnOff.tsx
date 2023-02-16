import React, {useState} from "react";

type RatingType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5
}

export function RatingOnOff(props: RatingType) {

    let [selectedd, setSelected] = useState(true)

    return (
        <div>
            <Star selected={true}/><button onClick={ () => {setSelected(false)} }>1</button>
            <Star selected={true}/><button onClick={ () => {setSelected(selectedd)} }>2</button>
            <Star selected={true}/><button onClick={ () => {setSelected(selectedd)} }>3</button>
            <Star selected={true}/><button onClick={ () => {setSelected(selectedd)} }>4</button>
            <Star selected={true}/><button onClick={ () => {setSelected(selectedd)} }>5</button>
            <Star selected={true}/><button onClick={ () => {setSelected(selectedd)} }>6</button>
        </div>
    )
}

type StarType = {
    selected: boolean
}

function Star(props: StarType) {
    if (props.selected === true) {
        return <span><b> star </b></span>
    } else {
        return <span> star </span>
    }

}

