import ReactDOM from 'react-dom/client'
import buttonStyle from './MyButton.module.css'
const root = ReactDOM.createRoot(document.getElementById("root"))

const MyButton = function(props) {
    // 고유한 클래스 이름이 부여된 것을 확인 가능
    // {font: "MyButton_font__2DthZ", color: "MyButton_color__1R2rw", size: "MyButton_size__1uFe0", border: "MyButton_border__34FhX"}
    console.log(buttonStyle)

    // 객체의 font, color, size, border 속성에 클래스 이름이 저장됨
    return <button className={`${buttonStyle.font} 
    ${buttonStyle.color} 
    ${buttonStyle.size} 
    ${buttonStyle.border}`}>{props.label}</button>
}

root.render(<MyButton label="Click Me" />)
