import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

const CounterWithLocalStorage = (props) => {
    // localStorage 접근 코드가 mount 되는 시점에 단 한번만 실행되도록, useState로 전달할 함수 안에 초기화 코드 작성
    const [ count, setCount ] = useState(() => {
        // 1. nullish coalescing operator(??) 사용
        // 2. 로컬 스토리지에는 오직 문자열만 저장할 수 있으므로 parseInt로 숫자로 형변환
        return parseInt(localStorage.getItem("count") ?? 0)
    })

    useEffect(() => {
        // count 값이 변경될 때마다 localStorage에 저장된 값도 변경
        localStorage.setItem("count", count)
    }, [count])

    return (
        <div>
            <p>count : {count}</p>
            <button onClick={() => {
                setCount(c => c + 1)
            }}>+</button>
            <button onClick={() => {
                setCount(c => c - 1)
            }}>-</button>
        </div>
    )
}

root.render(<CounterWithLocalStorage />)