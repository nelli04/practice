import React, {useState} from 'react';
import './App.css';
import {Input} from "./Input";
import Button from "./Button";
import {OnOff} from "./MONDAY/NativeJS/Dimych/React/OnOff/OnOff";
import {Accordion} from "./MONDAY/NativeJS/Dimych/React/Accordion";
import {AccordionOnOff} from "./MONDAY/NativeJS/Dimych/React/AccordionOnOff";
import {RatingOnOff} from "./MONDAY/NativeJS/Dimych/React/RatingOnOff";
import {Todolist} from "./src/Todolist";
import AppTodo from "./src/AppTodo";

function App() {
    /*const addMessage = (title: string) => {
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
)*/
    return (
        <div /*className={'AppTodo'}*/>
            <AppTodo/>
            {/*<RatingOnOff/>*/}
            {/*<OnOff />*/}
           {/* <AccordionOnOff titleV={'Menu1'}/>*/}
            {/*<AccordionOnOff titleV={'Menu2'}/>*/}
            {/*<OnOff on={false}/>
            <OnOff on={true}/>*/}
            {/*<Input setTitle={setTitle} title={title}/>
            <Button name={'+'} callBack={onClickButtonHandler}/>
            {message.map((m, index) => {
                return (
                    <div key={index}>{m.message}</div>
                )
            })
            }*/}
        </div>
    )
}
export default App;

    //걸어본다 - B1A4; 내꺼하자 - INFINITE; 외톨이야 - CNBLUE
