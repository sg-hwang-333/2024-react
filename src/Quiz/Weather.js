import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

const Weather = ({ city, temperature }) => {
    let temText = "";
    let temColor = "blue";

    if (temperature >= 27) {
        temText = "더움";
        temColor = "orange";
    } else if (temperature >= 6 ) {
        temText = "보통";
        temColor = "black";
    } else if (temperature >= 1 ) {
        temText = "쌀쌀";
    } else {
        temText = "추움";
    }

    return <div>{city}는 현재 <span style={{color: temColor}}>{temText}</span></div>

}
root.render(<Weather city="Seoul" temperature={2} />)