import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))


const Alerter = ({ label, onAlert }) => {
    return <button onClick={() => onAlert()}>{label}</button>
}

const Alerter2 = ({ label, alertLabel }) => {
    return <button onClick={() => alert(alertLabel)}>{label}</button>
}

function App(props) {
    const handleAlert = () => { alert("경보~!") }
    return (
        <div>
            <Alerter label="경보" onAlert={handleAlert} />
            <Alerter2 label="경보" alertLabel="경보~!" />
        </div>
    )
}

root.render(<App />)