import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {OnOff} from "./NativeJS/Dimych/OnOff/OnOff";
import {Accordion} from "./NativeJS/Dimych/React/Accordion";
import {Rating} from "./NativeJS/Dimych/React/Rating";


export type FilterValuesType = "all" | "active" | "completed" | "delete" | "treeTask";

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
    return (
        <>
            {/*<Rating value={0}/>
            <Rating value={1}/>
            <Rating value={2}/>
            <Rating value={3}/>
            <Rating value={4}/>
            <Rating value={5}/>
            <Accordion titleV={'Menu'} collapsed={true}/>
            <Accordion titleV={'Menu1'} collapsed={false}/>*/}

            <OnOff collapsed={`${true}${false}`}/>
            <OnOff collapsed={`false`}/>//train
        </>
    )
}


export default App;


/* let [tasks, setTasks] = useState([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false},
        {id: 4, title: "Rest API", isDone: false},
        {id: 5, title: "GraphQL", isDone: false},
    ]);
    function removeTask(id: number) {
        let filteredTasks = tasks.filter(t => t.id != id);
        setTasks(filteredTasks);
    }
    return (
        <div className="App">
            <Todolist title="What to learn"
                      tasks={tasks}
                      removeTask={removeTask}/>
        </div>
    );*/

//-------------------------------------------------------------------------

// import React, {useState} from 'react';
// import './App.css';
// import {Todolist} from './Todolist';
//
//
// export type FilterValuesType = "all" | "active" | "completed" | "three";
//
// function App() {
//
//     let [tasks, setTasks] = useState([
//         {id: 1, title: "HTML&CSS", isDone: true},
//         {id: 2, title: "JS", isDone: true},
//         {id: 3, title: "ReactJS", isDone: false},
//         {id: 4, title: "Rest API", isDone: false},
//         {id: 5, title: "GraphQL", isDone: false},
//     ]);
//
//     const deleteAllTasks = () => {
//         setTasks([])
//     }
//
//     function removeTask(id: number) {
//         let filteredTasks = tasks.filter(t => t.id != id);
//         setTasks(filteredTasks);
//     }
//
//     // let [filter, setFilter] = useState<FilterValuesType>("all");
//     //
//     // let tasksForTodolist = tasks;
//     //
//     // if (filter === "active") {
//     //     tasksForTodolist = tasks.filter(t => t.isDone === false);
//     // }
//     // if (filter === "completed") {
//     //     tasksForTodolist = tasks.filter(t => t.isDone === true);
//     // }
//     //
//     // function changeFilter(value: FilterValuesType) {
//     //     setFilter(value);
//     // }
//
//     return (
//         <div className="App">
//             <Todolist
//                 title="What to learn"
//                 tasks={tasks}
//                 removeTask={removeTask}
//                 //changeFilter={changeFilter}
//                 deleteAllTasks={deleteAllTasks}
//
//             />
//         </div>
//     );
// }
//
// export default App;