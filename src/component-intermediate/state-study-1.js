// useState 함수 불러오기
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root")) //루트객체 가져오는 것 

function Counter(props){
    //{} -쓰는 이유는 import 구문 다시 보면 된다. (Hook함수)

    //상태의 초기값, [] - 배열에 대한 비구조화 할당. count 는 0, setCount는 값을 바꾸고 싶을 때 사용
    const [count, setConut] = useState(0); //보통 값이 없으면 null을 넣기도 한다.마운트 될 때만 0으로 된다.  



    return(
        <div>
            <h1>{count}</h1>
            {/* onClick - 카멜표기법주의(c가 대문자) */}
            {/* setCount(1)을 하면 계속 Counter 를 호출한다. 이때 버튼을 누를 때마다 새로 호출하기(0부터 다시 랜더링) 때문에 1만 나오는 것이다. */}
            <button onClick={() => {setConut(1)}}>증가</button> 
            {/* 기존값이 남아있어 계속 더해지게 된다. -> 컴포넌트 함수의 재실행=> qnqns*/}
            <button onClick={()=>{setConut(count+1)}}>1씩증가</button> 
            <button onClick={()=>{setConut(count-1)}}>1씩감소</button> 
           
           {/* 버츄얼돔은 정말 딱 바뀐 부분만 바꾼다.  */}
            
            
        </div>
    )
    
}
root.render(<Counter />) //화면에 랜더링 (root에 그려짐)
//mount : 처음에 컴포넌트가 리얼 돔에 랜더링될 때를 의미한다. 
//unmount: 처음에 컴포넌트가 리얼돔에서 없어질 때를 의미한다. 