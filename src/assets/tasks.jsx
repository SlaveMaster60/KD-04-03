import {useEffect, useState} from "react"

export default function Tasks ({tasks, setTasks}) {
    const [searchQuery, setSearchQuery] = useState('');
    const [results, setResults] = useState([]);

useEffect (() => {
    setResults(())= => {
        return tasks.filter((task) => (task.task.includes)));
    }};
    }, [searchQuery, tasks]);

    function onChecked(task) {
        setTasks ((oldTasks)) => {
            return oldTask.map((oldTask)) => {
                if (oldTask.id == task.id) {
                    return {
                        id: oldTask.id,
                        task: oldTask.task,
                        done: !oldTask.done
                    }
                } else {
                }
            }}
        }}
    }

    return (
        <>
        <input type="text" placeholder="Search" className="input bock" value={searchQuery} onChange={(event) => {setSearchQuery(event.target.value)}} />
    )