import React, {useState} from 'react';
import './App.css';
//import {Todolist} from './Todolist';
import {OnOff} from "./MONDAY/NativeJS/Dimych/React/OnOff/OnOff";
import {FullInput} from "./FullInput";
import {Input} from "./Input";
import Button from "./Button";

function App() {
    const addMessage = (title: string) => {
        let newMessage = {message: title}
        setMessage([ newMessage, ...message])
    }

   let[title, setTitle] = useState('')
    console.log(title)


    const onClickButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

     let [message, setMessage] = useState([
        {message: 'message1'},
        {message: 'message3'},
        {message: 'message2'},
    ]
)
    return (
        <div>
            {/*<FullInput addMessage={addMessage}/>*/}
            <Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={onClickButtonHandler}/>
            {message.map((m, index) => {
                return (
                    <div key={index}>{m.message}</div>
                )
            })
            }
        </div>
    )
}
export default App;


//걸어본다 - B1A4; 내꺼하자 - INFINITE