import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

const MultipleStateComponent = function(props) {
    // useState 함수를 원하는 만큼 호출하여 여러 상태값을 관리할 수 있음
    const [count, setCount] = useState(0)
    const [text, setText] = useState("a")

    return (
        <div>
            <h1>{count}</h1>
            {/* 1,2,3..이런식으로 더해짐  */}
            <button onClick={() => setCount(count + 1)}>증가</button>
            <h1>{text}</h1>
            {/* aaa...이런식으로 더해짐  */}
            <button onClick={() => setText(text + "a")}>a 추가</button> 
        </div>
    )
}

root.render(<MultipleStateComponent />)