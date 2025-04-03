export default function Tasks(tasks) {
    return(
        <>
        <ul>
            {tasks.map((task) => (
                <li>
                    <input type="checkbox" className="checkbox m=2" checked={task.done} onChange={()}
                     
            
                    />
                    {task.task}
                    </li>
            ))}
        </ul>
        </>
    )
}