import React, { useState } from 'react'

const TodoForm = ({ todos, setTodos }) => {

    const [inputValue, setInputValue] = useState('')

    const handleChange = e => {
        setInputValue(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        if (!inputValue) return
        setTodos([...todos, { id: todos.length, content: inputValue, done: false }])
        setInputValue('')
    }

    return <form onSubmit={e => handleSubmit(e)} className="row">
        <div className="col">
            <input type="text" name="todo" placeholder="Enter a todo" value={inputValue} onChange={e => handleChange(e)} className="form-control" />
        </div>
        <div className="col-auto">
            <button type="submit" className="btn btn-primary">Add</button>
        </div>
    </form>

}

export default TodoForm