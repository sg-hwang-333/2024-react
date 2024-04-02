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

const TodoItem = function({todo, idx, handleTodoDelete}) {
    return <li key={idx}>{todo.text} <button onClick={() => handleTodoDelete(idx)}>X</button></li>
}

const TodoList = function({todos, handleTodoDelete}) {
    return (
        <ul>
            {
                todos.map((todo, idx) => {
                    return (
                        <TodoItem todo={todo} key={idx} handleTodoDelete={handleTodoDelete}/>
                    )
                })
            }
        </ul>
    )

}

const TodoApp = function (props) {
    const [todos, setTodos] = useState([
        { completed: false, text: '리액트 공부하기' },
        { completed: true, text: '스프링 공부하기' }
    ]);

    const handleTodoAdd = todo => {
        setTodos(todos.concat(todo));
    }

    const handleTodoDelete = todoText => {
        setTodos(todos.filter((text) => {
            return text !== todoText;
        }))
    }

    return (
        <div>
            <TodoList todos={todos} handleTodoDelete={handleTodoDelete} />
            <TodoAdder handleTodoAdd={handleTodoAdd} />
        </div>
    )
}


root.render(<TodoApp />)
