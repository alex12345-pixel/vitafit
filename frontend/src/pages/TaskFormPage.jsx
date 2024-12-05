import {useForm} from 'react-hook-form'
import { createTask } from '../api/tasksapi'
import { useNavigate} from "react-router-dom"

export function TaskFormPage() { 
   const {register, handleSubmit} = useForm()

   const navigate = useNavigate();

   const onSubmit = handleSubmit(async data => {
     await createTask(data)
     navigate("/tasks")
   

   })
    return (
        <div> 
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="title" {...register("title", {required: true})}/>
                <textarea rows="3" placeholder="Description" {...register("description", {required: true})}></textarea>
                <button> SAVE </button>
            </form>
        </div>
    )
    
}
