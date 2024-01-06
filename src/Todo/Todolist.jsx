import React, { useState } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import "./todo.css"


function Todolist() {

    const [add, setAdd] = useState("")
    const [task, setTask] = useState([])
    const [flag, setFlag] = useState(false)
    const [completed, setCompleted] = useState([])

    function handleSubmit(e) {
        e.preventDefault();

        if (flag === false)
            setTask([...task, add])
        else {
            task[flag] = add;
            setTask(task)
            setFlag(false)
        }
        setAdd("");
    }

    function handleDelete(e, index) {
        e.preventDefault();
        setTask(
            task.filter((value, ind) => {
                return ind !== index
            })
        );
    }

    function handleEdit(e, index) {
        e.preventDefault();
        setAdd(task[index])
        setFlag(index)
    }


    function handleCompleted(e,index)
    {
        e.preventDefault()
        setCompleted(...completed , [index])
    }

    return (
        <> 
        <div className="wapper">
            <div className="main">
                <h2>Todo list</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter your task' value={add} onChange={(e) => { setAdd(e.target.value) }} />
                    <button type='submit'>Add task</button>
                </form>
                <ul>
                    {
                        task.map((ask, index) => {
                            return (
                                <li  key={index} className={(completed.includes(index)? "completed": "")}>
                                    <span>{ask}</span>

                                    <div className="icon">
                                        <a href="" onClick={(e) => handleDelete(e, index)}><DeleteIcon/></a>
                                        <a href="" onClick={(e) => handleEdit(e, index)}><EditIcon/></a>
                                        <a href="" onClick={(e) => handleCompleted(e, index)}><CheckIcon/></a>
                                        </div>

                                    
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            </div>
        </>
    )
}

export default Todolist