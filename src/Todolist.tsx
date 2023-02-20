import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {FilterValuesType, TasksType} from './App';
import {SupperButton} from "./components/supperButton";


// export type TaskType = {
//     id: string
//     title: string
//     isDone: boolean
// }

type PropsType = {
    id: number
    title: string
    tasks: Array<TasksType>
    students: Array<string>
    removeTask: (taskId: string, todolistId: number) => void
    changeFilter: (value: FilterValuesType, todolistId: number) => void
    addTask: (title: string, todolistId: number) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: number) => void
    removeTodolist: (id: number) => void
    filter: FilterValuesType
}

export function Todolist(props: PropsType) {
    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            // addTask();
        }
    }
    const removeTodolistHandler = () => {
        {props.removeTodolist(props.id)}
    }
    const addTaskHandler = () => {
        {props.addTask(title, props.id)}
    }
    const removeTaskHandler = (tasksId: string) => {
        {props.removeTask(tasksId, props.id)}
    }
    const allButtonClickHandler = (value: FilterValuesType) => {
        {props.changeFilter(value, props.id)}
    }
    /*const activeButtonClickHandler = () => {

    }
    const completedButtonClickHandler = () => {

    }*/

    return <div>
        <h3> {props.title}
            <SupperButton callback={removeTodolistHandler} name={'removeTodolist'}/>
        </h3>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <SupperButton callback={addTaskHandler} name={'addTask'}/>
            {error && <div className="error-message">{error}</div>}
        </div>
        <ul>
            {
                props.tasks.map(t => {
                    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                        let newIsDoneValue = e.currentTarget.checked;
                        props.changeTaskStatus(t.taskId, newIsDoneValue, props.id);
                    }

                    return <li key={t.taskId} className={t.isDone ? "is-done" : ""}>
                        <input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
                        <span>{t.title}</span>
                        <SupperButton callback={()=> removeTaskHandler(t.taskId) } name={'removeTask'}/>
                    </li>
                })
            }
        </ul>
        <div>
            <SupperButton callback={() => allButtonClickHandler('all')} name={'all'}/>
            <SupperButton callback={() => allButtonClickHandler('active')} name={'active'}/>
            <SupperButton callback={() => allButtonClickHandler('completed')} name={'completed'}/>
        </div>
        <p></p>
        {
            props.students.map((el) => {
                return (
                    <div>{el}</div>
                )
            })
        }
    </div>
}


