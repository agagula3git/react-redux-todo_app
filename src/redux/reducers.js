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
    if(action.type === 'CREATE_TODO'){
        return {
            todos: state.todos.concat(action.payload)
        }
    }
    else{
        return state;
    }
}