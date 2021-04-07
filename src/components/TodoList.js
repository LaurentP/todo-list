import React from 'react'

const TodoList = ({ todos, setTodos }) => {

    const handleChangeDone = (e, id) => {
        let newTodos = []
        for (const todo of todos) {
            const done = todo.id === id ? e.target.checked : todo.done
            newTodos.push({ id: todo.id, content: todo.content, done: done })
        }
        setTodos(newTodos)
    }

    const handleClickDelete = id => {
        let newTodos = []
        for (const todo of todos) {
            if (todo.id !== id) newTodos.push({ id: todo.id, content: todo.content, done: todo.done })
        }
        setTodos(newTodos)
    }

    return <table className="list">
        <tbody>
            {todos.map(todo => {
                return <tr key={todo.id}>
                    <td>
                        <label htmlFor={`done-${todo.id}`} className="checkbox-done">
                            <input type="checkbox" name="done" id={`done-${todo.id}`} checked={todo.done} onChange={e => handleChangeDone(e, todo.id)} />
                            <div className="icon"></div>
                        </label>
                    </td>
                    <td className={todo.done ? "text-done" : null}>
                        {todo.content}
                    </td>
                    <td>
                        <button onClick={() => handleClickDelete(todo.id)} className="btn-delete"></button>
                    </td>
                </tr>
            })}
        </tbody>
    </table>

}

export default TodoList