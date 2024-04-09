import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))


const TodoAdder = function ({ handleTodoAdd }) {

    const [input, setInput] = useState()
    const handleOnChange = e => setInput(e.target.value)

    return (
        <div>
            <input type='text' value={input} onChange={handleOnChange} />
            <button onClick={() => {
                if (input.trim().length > 0) {
                    handleTodoAdd({ completed: false, text: input })
                    setInput('');
                } else {
                    alert('정상적으로 입력해주세요');
                }

            }}>추가</button>
        </div>
    )
}

const TodoItem = function({todo, idx, handleTodoDelete, handleTodoStatusToggle}) {
    return <li><input type='checkBox' onClick={() => handleTodoStatusToggle(idx)}/><span style={todo.completed ? {textDecoration:'line-through'} : null}>{todo.text}</span> <button onClick={() => handleTodoDelete(idx)}>X</button></li>
}

const TodoList = function({todos, handleTodoDelete, handleTodoStatusToggle}) {
    return (
        <ul>
            {
                todos.map((todo, idx) => {
                    return (
                        <TodoItem todo={todo} idx={idx} handleTodoDelete={handleTodoDelete} handleTodoStatusToggle={handleTodoStatusToggle}/>
                    )
                })
            }
        </ul>
    )

}

const TodoApp = function (props) {
    const [todos, setTodos] = useState([
        { completed: false, text: '리액트 공부하기' },
        { completed: false, text: '스프링 공부하기' }
    ]);

    const handleTodoAdd = todo => {
        setTodos(todos.concat(todo));
    }

    const handleTodoDelete = index => {
        setTodos(todos.filter((_, idx) => {
            return idx !== index;
        }))
    }

    const handleTodoStatusToggle = index => {
        setTodos(todos.map((todo,idx) => {
            if (idx === index) {
                todo = {...todo, completed: !todo.completed}
            }

            return todo;
        }))
    }

    return (
        <div>
            <TodoList todos={todos} handleTodoDelete={handleTodoDelete} handleTodoStatusToggle={handleTodoStatusToggle}/>
            <TodoAdder handleTodoAdd={handleTodoAdd} />
        </div>
    )
}


root.render(<TodoApp />)
