import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

const Rectangle = ({ width, height, color }) => {
    return (
        <>
            <div style={{ width: `${width}`, height: `${height}`, backgroundColor: `${color}` }}>
            </div>
        </>
    )

}
root.render(<Rectangle width="100px" height="100px" color="#FF0000" />)