import React, {useState} from "react";

type RatingType = {
    //value: 0 | 1 | 2 | 3 | 4 | 5
}

export function RatingOnOff(props: RatingType) {

    let [selectedd, setSelected] = useState(0)

    return (
        <div>
            <Star selectedd={selectedd > 0}/>
            <button onClick={() => {
                setSelected(1)
            }}>1
            </button>
            <Star selectedd={selectedd > 1}/>
            <button onClick={() => {
                setSelected(2)
            }}>2
            </button>
            <Star selectedd={selectedd > 2}/>
            <button onClick={() => {
                setSelected(3)
            }}>3
            </button>
            <Star selectedd={selectedd > 3}/>
            <button onClick={() => {
                setSelected(4)
            }}>4
            </button>
            <Star selectedd={selectedd > 4}/>
            <button onClick={() => {
                setSelected(5)
            }}>5
            </button>
        </div>
    )
}

type StarType = {
    selectedd: boolean
}

function Star(props: StarType) {

    return (
        <div>
            {props.selectedd ? <span><b> star </b></span> : <span> star </span>}
        </div>
    )
}

/* if (props.selectedd == true) {
        return <span><b> star </b></span>
    } else {
        return <span> star </span>
    }*/