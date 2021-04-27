import React from 'react'
import './ViewTodos.css'

const TODO_STATUSES = [
    'Unstarted',
    'In Progress',
    'Completed'
]

export default function ViewTodos(props) {
    /*const [currentId, setCurrentId] = useState('');*/

    const handleStatus = (id, status) =>{
        props.onEditTodo(id, {status:status});
    }
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {props.todos.map(todo=>{
                        return <tr key={todo.id}>
                            <td>{todo.title}</td>
                            <td>{todo.description}</td>
                            <td><select value={todo.status} onChange={e=>handleStatus(todo.id, e.target.value)}>
                                    {TODO_STATUSES.map(status => (
                                        <option key={status} value={status}>{status}</option>
                                    ))}
                                </select></td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
