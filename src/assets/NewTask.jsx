import { useSTate } from "react"

export default function NewTask({setTasks}) {
    const [task, setTask] = useState('');

    function addTask() {
        setTasks((oldTasks) => { return[
             ...oldTasks, {id: Date.now(), task: task, done: false}
            ]});
    }

    return (
        <>
        <input type="text"
       
        </>
    )
}