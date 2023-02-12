import React, {useState} from 'react';
import './App.css';
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

//걸어본다 - B1A4; 내꺼하자 - INFINITE; 외톨이야 - CNBLUE

/*
let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

const getNames = (array) => {
    const result = new Array();
    const getName = obj => obj.name
    for (let i = 0; i < array.length; i++) {
        const temp =  getName(array[i])
        result[i] = temp
    }

    return result
}
const name = getNames(students)
console.log(getNames(students));

const addCScore = (array) => {
    const result = new Array();
    const addScore = (obj) => {
        const copy = {...obj}
        copy.scores = obj.scores + 10
        return copy
    }
    return result;
}

const selfMadeMap = (array, func) => {
    const result = []
    const addScore = (obj) => {
        const copy = {...obj}
        copy.scores = obj.scores + 10
        return copy
    }
    return result;
*/
//}