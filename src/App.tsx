import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./MONDAY/NativeJS/Dimych/React/Accordion";
import {OnOff} from "./MONDAY/NativeJS/Dimych/React/OnOff/OnOff";


function App() {

    let [acc, setAcc] = useState(false)
    let [on, setOn] = useState(false)
    return (
     <div>
         <OnOff On={(on) => {setOn(on)}} on={on}/>
         {/*<Accordion collapsed={acc} titleV={'Menu'} on={() => {setAcc(!acc)}}/>*/}
     </div>
    )

}

export default App;


//------------------------------------------------------------------------------------------

// import React, {useState} from 'react';
// import './App.css';
// import {Todolist} from './Todolist';
// import {v1} from 'uuid';
//
// export type FilterValuesType = "all" | "active" | "completed";
//
// function App() {
//
//     let [tasks, setTasks] = useState([
//         {id: v1(), title: "HTML&CSS", isDone: true},
//         {id: v1(), title: "JS", isDone: true},
//         {id: v1(), title: "ReactJS", isDone: false},
//         {id: v1(), title: "Rest API", isDone: false},
//         {id: v1(), title: "GraphQL", isDone: false},
//     ]);
//     let [filter, setFilter] = useState<FilterValuesType>("all");
//
//
//     function removeTask(id: string) {
//         let filteredTasks = tasks.filter(t => t.id != id);
//         setTasks(filteredTasks);
//     }
//
//     function addTask(title: string) {
//         let task = {id: v1(), title: title, isDone: false};
//         let newTasks = [task, ...tasks];
//         setTasks(newTasks);
//     }
//
//     function changeStatus(taskId: string, isDone: boolean) {
//         let task = tasks.find(t => t.id === taskId);
//         if (task) {
//             task.isDone = isDone;
//         }
//
//         setTasks([...tasks]);
//     }
//
//
//     const filteredTasks=()=>{
//         // let tasksForTodolist = tasks;
//         //
//         // if (filter === "active") {
//         //  return   tasksForTodolist = tasks.filter(t => !t.isDone);
//         // }
//         // if (filter === "completed") {
//         //   return  tasksForTodolist = tasks.filter(t => t.isDone);
//         // }
//         // return tasksForTodolist
//
//         let tasksForTodolist = tasks;
//         switch (filter) {
//             case 'active': {
//                 return   tasksForTodolist = tasks.filter(t => !t.isDone);
//             }
//             case 'completed': {
//                 return  tasksForTodolist = tasks.filter(t => t.isDone);
//             }
//             default:return tasksForTodolist
//         }
//     }
//
//
//     function changeFilter(value: FilterValuesType) {
//         setFilter(value);
//     }
//
//
//     return (
//         <div className="App">
//             <Todolist title="What to learn"
//                       tasks={filteredTasks()}
//                       removeTask={removeTask}
//                       changeFilter={changeFilter}
//                       addTask={addTask}
//                       />
//         </div>
//     );
// }
//
// export default App;