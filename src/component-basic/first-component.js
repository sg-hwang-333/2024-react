import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))
// 루트에서 제작 (밑에서 root.render() 필수)

// 하나의 함수가 컴포넌트가 됨 (원래 함수는 대문자로 시작하면 안 됨)
function FirstComponent() {
  return <div>First Component</div>
}

root.render(<FirstComponent/>)