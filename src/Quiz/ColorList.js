import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))


const ColorList = ({ colors }) => {

    return (
        <div>
            {
                colors.map((e) => {
                    return <div style={{width:"100px", height:"100px", backgroundColor: e}}></div>
                })
            }
        </div>
    )
}
root.render(<ColorList colors={["#FF0000", "#00FF00", "#0000FF"]} />)