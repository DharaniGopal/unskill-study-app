import {useState} from 'react';

function TodoList(){
    const[task,setTask] = useState("");
    const[todos,setTodos] = useState([]);

    const handleAdd = () => {
        if(!task.trim()) return;

        setTodos([...todos,{
            id:Date.now(),
            text: task
        }])
        setTask("");
    }

    const handleDelete = (id) =>{
        const updateTodo = todos.filter((todo) => {
            return todo.id != id;
        })
        setTodos(updateTodo);
    }

    return(
        <>
            <h1>Todo List</h1>
            <input
                type="text"
                value={task}
                placeholder="Enter Todo"
                onChange={(e) => setTask(e.target.value)}
            />
            <button onClick={handleAdd}>Add</button>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <span>{todo.text}</span>
                    <button onClick={() => handleDelete(todo.id)}>Delete</button>
                </div>
            ))}
        </>
    )
}

export default TodoList;