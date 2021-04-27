import { uniqueId } from './actions'

const initTodos = [
    {
        id: uniqueId(),
        title: 'Learn Flutter',
        description: 'Widget, Scaffold ...',
        status: 'In Progress'
    },
    {
        id: uniqueId(),
        title: 'Learn React Native',
        description: 'View, Stylesheet, Text ...',
        status: 'Unstarted'
    }
]

export default function reducer(state = {todos: initTodos}, action){
    switch(action.type){
        case 'CREATE_TODO':
            return{
                todos: state.todos.concat(action.payload)
            }
        case 'EDIT_TODO':
            const {payload} = action;
            return{
                todos: state.todos.map(todo =>{
                    if(todo.id === payload.id){
                        return Object.assign({}, todo, payload.params)
                    }
                    return todo;
                })
            }
        default:
            return state;
    }
}