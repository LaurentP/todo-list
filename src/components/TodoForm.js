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

    return <form onSubmit={e => handleSubmit(e)}>
        <div>
            <input type="text" name="todo" placeholder="Enter a todo" value={inputValue} onChange={e => handleChange(e)} />
        </div>
        <div>
            <button type="submit">Add</button>
        </div>
    </form>

}

export default TodoForm