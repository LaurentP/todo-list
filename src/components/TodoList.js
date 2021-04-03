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

    return <table className="my-4 table table-striped table-borderless">
        <tbody>
            {todos.map(todo => {
                return <tr key={todo.id} className="row">
                    <td className="col-auto align-middle">
                        <input type="checkbox" name="done" checked={todo.done} onChange={e => handleChangeDone(e, todo.id)} className="form-check-input" />
                    </td>
                    <td className={todo.done ? "col align-middle text-decoration-line-through" : "col align-middle"}>
                        {todo.content}
                    </td>
                    <td className="col-auto align-middle">
                        <button onClick={() => handleClickDelete(todo.id)} className="btn btn-primary">Delete</button>
                    </td>
                </tr>
            })}
        </tbody>
    </table>

}

export default TodoList