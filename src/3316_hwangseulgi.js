// 3316 황슬기
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))


const Greeting = ({ prefix, target }) => {
    return `${prefix} ${target}`;
}

const Reverse = ({ str }) => {
    return str.split('').reverse().join('');
}

const Gugudan = ({ from, to }) => {
    let arr = [];
    for (let i = from; i <= to; i++) {
        for (let j = 2; j <= 9; j++) {
            arr.push([i, j]);
        }
    }
    return (
        arr.map((e) => {
            return `${e[0]} x ${e[1]} = ${e[0] * e[1]} \n`;
        })
    )
}

const LimitedPusher = ({ limit }) => {
    const [count, setCount] = useState(0);
    return (
        <>
        { count < limit ? <button onClick = {() => setCount(count + 1)}>클릭</button> : false }
        <br></br>
        { count < limit ? `${count}/${limit}번 클릭하였습니다.` : "모두 클릭하였습니다" }
        </>

    )
}

const LikeDislikeButton = () => {
    const [like, setLike] = useState(0);
    const [hate, setHate] = useState(0);
    
    return (
        <>
            <div>좋아요 : {like}, 싫어요 : {hate}</div>
            {hate < like ? <button onClick={() => setLike(like + 1)} style={{backgroundColor:"green"}}>좋아요</button>
                :
            <button onClick={() => setLike(like + 1)} >좋아요</button>}
            {like < hate ? 
            <button onClick={() => setHate(hate + 1)} style={{backgroundColor:"red"}}>싫어요</button>
                :
            <button onClick={() => setHate(hate + 1)}>싫어요</button>}
            <button onClick={() => {
                setLike(0)
                setHate(0)
            }}>초기화</button>
        </>
    )

}

const RandomColorPicker = () => {

    const [color, setColor] = useState(randomColorStr());

    function randomHex() {
        return (Math.floor(Math.random() * (15 - 1 + 1) + 1)).toString(16);
    }
    function randomColorStr() {
        let colorStr = '';
        for (let i = 0; i < 6; i++ ){
            colorStr += randomHex();
        }
        return `#${colorStr}`;
    }

    return (
        <>
            <div style={{width: '100px', height: '100px', backgroundColor:{color}}}></div>
            <br></br>
            <button onClick={() => setColor(() => randomColorStr())}>pick</button>
        </>
    );
}

const App = () => {
    return (
        <div>
            <Greeting prefix="Hello" target="Yu Byung Suk" />
            <br></br>
            <Reverse str="Hello" />
            <br></br>
            <Gugudan from={3} to={5} />
            <br></br>
            <LimitedPusher limit={10} />
            <br></br>
            <LikeDislikeButton />
            <br></br>
            <RandomColorPicker />
        </div>
    )
}


root.render(<App />)