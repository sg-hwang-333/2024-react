import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

//Child = 컴포넌트 
//props 라는 인자 하나만 전달하기 때문에 소괄호를 쓸 필요가 없다. 
//children 예약어 - 
const Child = props => <div>{props.children}</div>

root.render(<div>
    {/* child안에 있는 값이 props.children으로 들어간다. Hello가 들어감*/}
    <Child>Hello</Child> 
    {/* child 안에 들어잇는 h1 태그, div,ol,li,child가 들어가고, 안에 있는 Child는 div로 바뀐다. */}
    <Child>
        <h1>Title</h1>
        <div>React</div>
        <ol>
            <li>item 1</li>
            <li>item 2</li>
        </ol>
        <Child>Inner Child</Child>
    </Child>
</div>)