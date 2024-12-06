import { useForm } from 'react-hook-form'
import { createTask, deleteTask, updateTask } from '../api/tasksapi'
import { useNavigate, useParams } from "react-router-dom"

export function TaskFormPage() {
    const { register, handleSubmit } = useForm()

    const navigate = useNavigate();
    const param = useParams();
    const onSubmit = handleSubmit(async data => {

        if (param.id) {
            await updateTask(param.id,data)
        }
        else {
            await createTask(data)
        }
        navigate("/tasks")

    })

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="title" {...register("title", { required: true })} />
                <textarea rows="3" placeholder="Description" {...register("description", { required: true })}></textarea>
                <button> SAVE </button>
            </form>
            {param.id && (
                <button onClick={async () => {
                    const si = window.confirm("si o no?");
                    if (si) {
                        await deleteTask(param.id);
                        navigate("/tasks");
                    }


                }}>Delete</button>
            )}
        </div>
    )

}
