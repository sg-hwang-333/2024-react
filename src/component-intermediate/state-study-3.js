import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

const StateDemoComponent = function(props) {
    // 저장할 상태값과 관련된 제약이 없으므로 객체도 저장 가능
    const [state, setState] = useState({ //useState에 뭐든 타입 저장이 가능하다.(객체 저장도 가능 )현재 상태는 1개있지만 객체 안의 값이 2개이기 때문에 상태값이2개처럼 보이는 것이다. 
        //객체로 저장을 할 때 생기는 어려움
        //T의 논리의 흐름:
        value1: "hello",
        value2: 1000
    })

    return (
        <div>
            <button onClick={() => {
                if(state.value1 === "hello") {
                    // 기존 객체를 복사하는 과정에서 새롭게 값을 갱신해주는 것을 확인 가능
                    // setState( { ...state, value1: "bye" } ) //...연산자는 다양한 의미로 쓰이는데 여기서는 복사로 쓰였다. 
                    //1. state.value1 = "bye"
                    //2. setState(state)
                    //이렇게 씀 -> console.log로는 바뀐다.
                    //{ 값을 바꾸려면 }
                    /*
                        새 객체를 하나 만들기 
                        기존 객체를 복사한다. 
                        hello를 bye로 바꾸고 참조하는 값을 바뀌었다고 setState를 속이면 버튼안에 있는 값이 bye로 바뀔 수 있다. 
                     */ 
                    //새로운 State를 만들어 state가 참조하는 값을 바꾼다. 
                    const newState = {}
                    newState.value1 = "bye"
                    newState.value2 = state.value2
                    setState(newState)
                    
                } else {
                    setState( { ...state, value1: "hello" } ) // ...state는 기존에 있는 State을 복사한다. -> 원하는 값을 넣어준다.->이때 순서바꾸면 안된다. 
                                                              // 단일 객체는 그냥 값을 바꿔도 큰 상관이 없지만 값이 여러개인 객체는 참조를 고려해야 한다.
                } //다음시간에 컴포넌트 props부터푼다. 
            }}>{state.value1}</button>
            <br />
            <button onClick={() => {
                setState( { ...state, value2: state.value2 * 2 } )
            }}>{state.value2}</button>
        </div>
    )
}

root.render(<StateDemoComponent />)