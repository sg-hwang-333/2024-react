import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

const SlotMachine = function (props) {
    const { s1, s2, s3 } = props;

    let str = "";
    let color = "black";

    if (s1 == s2 && s2 == s3) {
        str = "Congrats!";
        if (s1 == "7") {
            color = "red";
        }
    }

    return (
        <div>
            <div>
                {s1} {s2} {s3}
            </div>
            <div style={{
                color: color,
            }}>{str}</div>
            <hr></hr>
        </div>
    );

}

root.render(
    <div>
        <SlotMachine s1="X" s2="Y" s3="Z" />
        <SlotMachine s1="X" s2="X" s3="X" />
        <SlotMachine s1="7" s2="7" s3="7" />
        <SlotMachine s1="🍓" s2="🍒" s3="🍍" />
        <SlotMachine s1="🍒" s2="🍒" s3="🍒" />
    </div>
)