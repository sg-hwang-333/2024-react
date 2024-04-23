import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))


const Rating  = ({ rating }) => {

    let str = "";

    while (rating > 0) {
        if (rating - 1 >= 0) {
            rating -= 1;
            str += "★";
        } else {
            rating -= 0.5;
            str += "☆";
        }
    }

    return (
        <div>{str}</div>
    )
}
root.render(<Rating rating={3.5} />)