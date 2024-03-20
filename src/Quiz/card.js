import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

const Card = function (props) {
    return (
        <div style={{
            width: props.width, height: props.height,
            borderRadius: "6px",
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 8px 24px"
        }}>
            {props.children}
        </div>
    )
}

root.render(
    <div>
        <Card width="100px" height="100px" />
        <Card width="20px" height="70px" />
        <Card width="50px" height="60px" />
        <Card width="90px" height="30px" />
        <Card width="20px" height="10px" />
    </div>

)