import React, { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App = () => {

	const [todos, setTodos] = useState([])

	useEffect(() => {
		setTodos(JSON.parse(localStorage.getItem('todos')))
	}, [])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	return <div className="container">
		<h1 className="my-4 text-center">Todo List</h1>
		<TodoForm todos={todos} setTodos={setTodos} />
		<TodoList todos={todos} setTodos={setTodos} />
	</div>

}

export default App