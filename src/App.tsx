import React, {useState} from 'react';
import './App.css';
import {v1} from "uuid";
import {Todolist} from "./Todolist";

export type BossType = {
    title: string
    filter: FilterTaskType
    tasks: TasksType[]
}
export type TasksType = {
    idTask: string
    title: string
    isDone: boolean
}
export type FilterTaskType = 'all' | 'active' | 'completed'


function App() {
    let [tasksTodo, setTasks] = useState<Array<BossType>>([{
        title: "What to learn",
        filter: "all",
        tasks: [
            {idTask: v1(), title: "HTML&CSS", isDone: true},
            {idTask: v1(), title: "JS", isDone: true}
        ]}])

    function removeTask(taskID: string, todoID: number) {
        setTasks(tasksTodo.map((el, index) => index === todoID ? {
            ...el, tasks: [...el.tasks.filter(f => f.idTask !== taskID)]
        } : el))
    }

    function addTasks(title: string, todoID: number) {
        let task: TasksType = {idTask: v1(), title: title, isDone: false}
        setTasks(tasksTodo.map((el, index) => index === todoID ? {...el, tasks: [task, ...el.tasks]} : el))
    }

    function changeTasksStatus(isDone: boolean, taskID: string, todoID: number) {
        setTasks(tasksTodo.map((el, index) => index === todoID
            ? {...el, tasks: el.tasks.map(m => m.idTask === taskID ? {...m, isDone: isDone} : m)} : el))
    }

    function changeFilterTask(value: FilterTaskType, todoID: number) {
        setTasks(tasksTodo.map((el, index) => index === todoID ? {...el, filter: value} : el))
    }

    function removeTaskFilter(todoID: number) {
        setTasks(tasksTodo.filter((el, index) => index !== todoID))
    }

    return (
        <div className='App'>
            {
                tasksTodo.map((t, index) => {
                    let allTaskTodo = t.tasks;
                    let taskTodo = allTaskTodo;
                    if (t.filter === 'active') {
                        taskTodo = allTaskTodo.filter(t => t.isDone === false)
                    }
                    if (t.filter === 'completed') {
                        taskTodo = allTaskTodo.filter((t => t.isDone === true))
                    }
                    return <Todolist title={t.title}
                                     id={index}
                                     tasks={taskTodo}
                                     filter={t.filter}
                                     addTasks={addTasks}
                                     removeTask={removeTask}
                                     changeTasksStatus={changeTasksStatus}
                                     changeFilterTask={changeFilterTask}
                                     removeTaskFilter={removeTaskFilter}
                                     key={index}/>
                })
            }



        </div>
    );
};

export default App;