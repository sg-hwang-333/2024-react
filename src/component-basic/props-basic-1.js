import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

// props를 통해서 전달된 값에 접근 가능
const ComponentWithProps = function(props) {
  console.log(props)
  return <p>{JSON.stringify(props)}</p>
}

root.render(
<div>
  <ComponentWithProps value="Hello" />
  <ComponentWithProps value={1} />
  <ComponentWithProps value={{ a: 1, b: "React" }} />
  <ComponentWithProps value={() => { }} />
</div>)