import React, { Fragment, useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './App.css'

const App = () => {

	const [todos, setTodos] = useState([])

	useEffect(() => {
		setTodos(JSON.parse(localStorage.getItem('todos')))
	}, [])

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos))
	}, [todos])

	return <Fragment>
		<div className="header">
			<div className="container">
				<h1>Todo List</h1>
				<TodoForm todos={todos} setTodos={setTodos} />
			</div>
		</div>
		<div className="container">
			<TodoList todos={todos} setTodos={setTodos} />
		</div>
	</Fragment>

}

export default App