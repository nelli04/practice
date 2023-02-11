type DataType = {
    title: string
    tasks: Array<TasksType>
    students: Array<string>
}
type TasksType = {
    taskId: number
    title: string
    isDone: boolean
}
export const TASKS = (props: DataType) => {
    return (
        <ul>
            <li>
                {props.students.map((DataType) => {
                    return (DataType)
                })}
            </li>
        </ul>
    )
}

