import ReactDOM from 'react-dom/client'
// 전체 스타일 CSS 파일 불러오기
import './style.css'
// 컴포넌트 스타일 CSS 파일 불러오기
import './App.css'
const root = ReactDOM.createRoot(document.getElementById("root"))

const App = function(props) {
    return (
        <div id="mydiv">
            <p className="mypara">para</p>
        </div>
    )
}

root.render(<App />)