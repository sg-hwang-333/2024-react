import ReactDOM from 'react-dom/client'
// CSS와 같은 방식으로 파일 import 가능
// (내부적으로는 node-sass에 의해서 CSS로 변환 처리됨)
import './SassApp.scss'
const root = ReactDOM.createRoot(document.getElementById("root"))

const SassApp = function(props) {
    return (
        <div>
            <h1>title</h1>
        </div>
    )
}

root.render(<SassApp />)