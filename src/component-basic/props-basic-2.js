import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

const ComponentWithMultipleProps = function(props) {
    console.log(props)
    // props 값은 수정 불가
    // Cannot assign to read only property 'name' of object '#<Object>'
    // props.value1 = 1234
    const { value1, value2, whatever } = props
    return <p>{value1} {value2} {whatever}</p>
}

const propsObj = {
    value1: 2,
    value2: 'JavaScript',
    whatever: 2.345
}

root.render(<div>
    <ComponentWithMultipleProps value1={1} value2='React' whatever={1.234} />
    {/* spread 연산자 사용 가능 */}
    <ComponentWithMultipleProps {...propsObj} />
</div>)