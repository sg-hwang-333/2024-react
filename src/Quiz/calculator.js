import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))


const Calculator = function (props) {

    const {num1, num2, op} = props;

    let str = `${num1} ${op} ${num2} = `;

    switch (op) {
        case "+": str += (num1 + num2); break;
        case "-": str += (num1 - num2); break;
        case "*": str += (num1 * num2); break;
        case "/": str += (num1 / num2); break;
        default: return "유효한 식이 아닙니다.";
    }

    return str;
    

}


root.render(
    <div>
        <Calculator num1={1} num2={2} op="+" />
        <br></br>
        <Calculator num1={1} num2={2} op="-" />
        <br></br>
        <Calculator num1={1} num2={2} op="*" />
        <br></br>
        <Calculator num1={1} num2={2} op="/" />
        <br></br>
        <Calculator num1={1} num2={2} op="ㄴ" />
    </div>
)