import React, {useState} from 'react';
import './App.css';
import {Counter} from "./components/Counter";






function App() {

    let [click, setClick] = useState(0)
    const maxInc = 5;

    const buttonInc = () => {
        if (click === maxInc) {
            return
        } else {
            setClick((count)=> count + 1)
        }
    }
    const buttonReset = () => {
        setClick(0)
    }

    return (
        <div className='container'>
            <Counter click={click}
                     buttonReset={buttonReset}
                     buttonInc={buttonInc}/>
        </div>
    )
}

export default App;
