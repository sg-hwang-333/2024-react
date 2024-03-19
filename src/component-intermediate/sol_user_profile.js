// useState 함수 불러오기
import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
const root = ReactDOM.createRoot(document.getElementById("root"))

const UserProfile = function(props) {
    const [userName,setUserName] = useState("홍길동");
    const [userAge,setUserAge] = useState(32);
    const [emailAddress,setEmailAddress] = useState("bangminseo@gmail"); 

    return(
        <div>
            <h1>{userName}</h1>
            <h1>{userAge}</h1>
            <h1>{emailAddress}</h1>
            
        </div>
    )
}
root.render(<UserProfile/>)