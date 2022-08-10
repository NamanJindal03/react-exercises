import { HANDLE_ON_CHANGE_TODO_FORM, RESET_TODO_FORM } from "./action.type"
export default (todoForm, action) => {
    switch(action.type){
       case HANDLE_ON_CHANGE_TODO_FORM:
        return {...todoForm,[action.payload.name] : action.payload.value};

        case RESET_TODO_FORM:
            return {
                todo: '',
                trial:''
              };

        default: 
            return todoForm;
    }
        
}

/* Formik */