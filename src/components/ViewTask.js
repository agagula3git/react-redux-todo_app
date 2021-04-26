import React from 'react'
import './ViewTask.css'

export default function ViewTask(props) {
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
                            <td>{todo.status}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
