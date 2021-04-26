let _id = 1;
export function uniqueId(){
    return _id++;
}

export function createTodo({title, description}){
    return{
        type: 'CREATE_TODO',
        payload: {
            id: uniqueId(),
            title,
            description,
            status: 'Unstarted'
        }
    }
}