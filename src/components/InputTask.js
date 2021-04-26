import React, { useState } from 'react'
import './InputTask.css'
import ViewTask from './ViewTask'

export default function InputTask(props) {
    const [state, setState] = useState([]);

    const handleChange = e =>{
        const {name, value} = e.target;
        setState({
            ...state, [name]: value
        });
    }

    const resetForm = () =>{
        setState({
            title: '',
            description: ''
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        props.onCreateTodo({
            title: state.title,
            description: state.description
        });
        resetForm();
    }

    return (
        <div className="main">
            <div className="input-task">
                <form className="mx-3" onSubmit={handleSubmit}>
                    <input 
                        type="text" 
                        name="title" 
                        value={state.title}
                        placeholder="Title"
                        onChange={handleChange}
                    />
                    <textarea 
                        type="text"
                        name="description"
                        value={state.description}
                        placeholder="Description"
                        maxlength="50"
                        onChange={handleChange}
                    />
                    <input 
                        type="submit"
                        value="Save"
                    />
                </form> 
            </div>
            <div className="view-task">
                <ViewTask todos={props.todos}/>
            </div>
        </div>
    )
}
