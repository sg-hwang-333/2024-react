import React, { useState, useEffect, useRef } from 'react'
import ReactDOM from 'react-dom/client'
import usePersonStore from '../store/usePersonStore'
const root = ReactDOM.createRoot(document.getElementById("root"))


function ShowName() {
    const { updateFirstName, updateLastName} = usePersonStore((state) => state)

    
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const handleFirstOnChange = e => setFirstName(e.target.value)
    const handleLastOnChange = e => setLastName(e.target.value)

    return <div>
        이름: <input type='text' value={firstName} onChange={handleFirstOnChange}></input> <br></br>
        성: <input type='text' value={lastName} onChange={handleLastOnChange}></input> <br></br>
        <button onClick={() => {
            updateFirstName(firstName)
            updateLastName(lastName)
        }}>입력</button>
    </div>
}

function PersonApp(props) {
    const {firstName, lastName} = usePersonStore((state) => state)

    return <div>
        <h1>이름: {firstName}  성: {lastName}</h1>
        <ShowName />
    </div>
}

root.render(<PersonApp />)