import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))


const Repeater = ({ text, repeat }) => {
    const repeatArr = [];

    for (let i = 0; i < repeat; i++) {
        repeatArr.push(text);
    }

    return (
        <ul>
            {
                repeatArr.map((e) => {
                    return <li>{e}</li>
                })
            }
        </ul>
    )
}
root.render(<Repeater text="Hello" repeat={5} />)