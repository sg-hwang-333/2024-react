import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import { DebounceInput } from 'react-debounce-input'
const root = ReactDOM.createRoot(document.getElementById("root"))

function subscribe(subject)  {
    const id = setInterval( function() {
        console.log(`"${subject}" 관련 소식 구독`)
    }, 1000);

    // 반환하는 함수가 구독 해지 함수가 되도록 구현
    return function() {
        console.log(`"${subject}" 관련 소식 구독 해제`)
        clearInterval(id)
    }
}

function UseEffectUnmountDemo(props) {
    const [query, setQuery] = useState('')

    useEffect(() => {
        const subject = query.trim()
        // 검색어가 있는 경우에만 구독 진행
        if(subject.length > 0) {
            // query가 바뀌는 시점에 콜백 함수 실행하며 구독
            const unsubscribe = subscribe(subject)
            // 새 query 내용으로 바뀌면서 정리 콜백 함수에서 이전 구독 해지
            return () => unsubscribe()
        }
    }, [query])

    return <div>
        <DebounceInput type="text" value={query} debounceTimeout={1000} onChange={(e) => {
            setQuery(e.target.value)
        }} />
    </div>
}

root.render(<UseEffectUnmountDemo />)