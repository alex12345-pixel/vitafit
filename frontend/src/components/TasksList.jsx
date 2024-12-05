import { useEffect, useState } from "react"
import { getAllTasks } from "../api/tasksapi"
import { TaskCard } from "./TaskCard";

export function TaskList() {
    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        async function loadTasks() {
            const res = await getAllTasks();
            setTasks(res.data)
        }
        loadTasks();
    }, []);

    return <div>
        <div> {tasks.map(task => (
           <TaskCard key ={task.id} task ={task}/>
        ))}</div>
    </div>;



}
