import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import useCounterStore from '../store/useCounterStore'
const root = ReactDOM.createRoot(document.getElementById("root"))

// 외부 함수 정의
function logCount() {
    // 함수 내부에서 Store 함수의 메서드 호출하고 상태값 직접 접근 가능
    const count = useCounterStore.getState().count
    console.log(count)
}
// 외부 함수 정의
function incCount() {
    // 1. setState 메서드 호출하여 이전 상태값에 참조하여 값 바꾸기
    useCounterStore.setState(state => ({ count: state.count + 1 }))
    
    // 2. 이전 값을 참조할 필요 없으면 다음과 같이 사용 가능
    // useCounterStore.setState({ count: 100 })
    
    // 3. 다음과 같이 상태 변경 함수를 가져와서 호출해도 됨
    // const increment = useCounterStore.getState().increment
    // increment()
}


function Counter() {
    const { increment, decrement, set, add , incrementAsync} = useCounterStore((state) => state)

    return <div>
        <button onClick={increment}>1 더하기</button>
        <button onClick={decrement}>1 빼기</button>
        <button onClick={() => set(0)}>0으로 초기화하기</button>
        <button onClick={() => add(10)}>10 더하기</button>
        <button onClick={incrementAsync}>1초 후 1 더하기</button>
        <button onClick={logCount}>log count</button>
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