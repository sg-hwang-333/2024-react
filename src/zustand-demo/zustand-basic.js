import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import useCounterStore from '../store/useCounterStore'
const root = ReactDOM.createRoot(document.getElementById("root"))

function Counter() {
    const { increment, decrement, set, add } = useCounterStore((state) => state)

    return <div>
        <button onClick={increment}>1 더하기</button>
        <button onClick={decrement}>1 빼기</button>
        <button onClick={() => set(0)}>0으로 초기화하기</button>
        <button onClick={() => add(10)}>10 더하기</button>
    </div>
}

function ZustandApp(props) {
    const count = useCounterStore((state) => state.count)

    return <div>
        <h1>ZustandApp</h1>
        <p>{count}</p> 
        <Counter />
    </div>
}

root.render(<ZustandApp />)