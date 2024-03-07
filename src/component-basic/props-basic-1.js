import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

// props를 통해서 전달된 값에 접근 가능
const ComponentWithProps = function(props) {
  console.log(props)
  return <p>{JSON.stringify(props.value)}</p>
}

const Greeting = function(props) {
  const {age, name} = props
  return <h1>안녕하세요, {age}살 {name}씨</h1>
}

root.render(
<div>
  {/* <ComponentWithProps value="Hello" />
  <ComponentWithProps value={1} />
  <ComponentWithProps value={{ a: 1, b: "React" }} />
  <ComponentWithProps value={() => { }} /> */}
  <Greeting name={"황슬기"} age={19}/>
  <Greeting name={"홍삼"} age={2}/>
</div>)