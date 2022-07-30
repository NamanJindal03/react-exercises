import React, {useState} from 'react'
import { v4 as uuidv4 } from 'uuid';
function TodoForm({addTodo}) {
    /* add fucnction */
    const [todoString, setTodoString] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(todoString === ''){
            alert('Todo not added')
            return;
        }
        const todo = {
            id:uuidv4(),
            todoString:todoString //todoString: todoString
        }
        addTodo(todo);
        setTodoString('');
    }
  return (
    <>
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={todoString} 
                onChange={(e)=> setTodoString(e.target.value) }
                id='todoString'
                name='todoString'
            />
            <button >Add Todo</button>
        </form>
    </>
  )
}

export default TodoForm