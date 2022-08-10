import { ADD_TODO, DELETE_TODO } from "./action.type"
export default (todos, action) => {
    
    switch(action.type){
       case ADD_TODO:
        return [...todos, action.payload];

        case DELETE_TODO:
            return todos.filter(todo => todo.id !== action.payload);

        default: 
            return todos;
    }
        
}