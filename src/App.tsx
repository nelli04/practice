import React, {useState} from 'react';
import './App.css';
//import {Todolist} from './Todolist';
import {OnOff} from "./MONDAY/NativeJS/Dimych/React/OnOff/OnOff";
import {FullInput} from "./FullInput";
import {Input} from "./Input";
import Button from "./Button";


/*export type FilterValuesType = "all" | "active" | "completed" | "delete" | "treeTask";*/

//Hi guys!
//1. Let's create a 'DELETE ALL TASKS' button, and place it above the filter buttons
//Clicking the button removes all tasks
//2. Let's create a fourth filter button-if you click it, the first three tasks will be displayed
//3. Relocate everything associated with  filters to the Todolist.tsx component. Make it work
//
// let [filter, setFilter] = useState<FilterValuesType>("all");
//
// let tasksForTodolist = tasks;
//
// if (filter === "active") {
//     tasksForTodolist = tasks.filter(t => t.isDone === false);
// }
// if (filter === "completed") {
//     tasksForTodolist = tasks.filter(t => t.isDone === true);
// }
//
// function changeFilter(value: FilterValuesType) {
//     setFilter(value);
// }

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
{/*<div>
                <input/>
                <button>+</button>
            </div>*/}

{/*<Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion titleV={'Menu'} collapsed={true}/>
            <Accordion titleV={'Menu1'} collapsed={false}/>*/
}
{/*<OnOff collapsed={`${true}${false}`}/>
            <OnOff collapsed={`false`}/>//train*/
}
export default App;


//걸어본다 - B1A4; 내꺼하자 - INFINITE