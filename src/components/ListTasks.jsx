import { useState } from "react";

function ListTasks(){
    const [tasks,setTasks] = useState(
        [
            {id: 1, text: 'Buy Groceries',isEditing: false,isComplete:false},
            {id: 2, text: 'Do Laundry',isEditing: false,isComplete:false},
            {id: 3, text: 'Meal Prep',isEditing: false,isComplete:false}
        ]
    );

    const changeTaskText = (id,newText) => {
         setTasks(tasks.map(task => task.id == id ? {...task,text:newText} : task));
    };

    const saveTask = (id) => {
         setTasks(tasks.map(task => task.id == id ? {...task,isEditing : false} : task));
    };

    const editTask = (id) => {
         setTasks(tasks.map(task => task.id == id ? {...task,isEditing: true} : task));
    };

    const toggleTaskCompleted = (id) => {
        setTasks(tasks.map(task=> task.id == id ? {...task,isComplete: !task.isComplete} : task))
    }

    const renderTask = (task) => {
        return(
            <li key={task.id} onDoubleClick={() => editTask(task.id)}>
                <input type="checkbox" checked = {task.isComplete} onChange={() => toggleTaskCompleted(task.id)}></input>
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}></span>
                {task.isEditing ? (
                    <>
                        <input type="text" value={task.text} onChange={(e)=> changeTaskText(task.id,e.target.value)} onBlur={()=> saveTask(task.id)}></input>
                    </>
                )
                : (task.text)}
            </li>
        )
    }

    return(
        <div>
            <ul>               
                {tasks.map(renderTask)}
            </ul>
        </div>
    )
}

export default ListTasks;
