import { create } from "zustand"

// 첫 번째 인자로 전역 상태를 변경하는 함수(set)를 전달 받음
const useCounterStore = create((set) => ({
    // 상태값 정의
    count: 0,
    // 상태 변경 함수 정의
    increment: () => {
        // 이전 상태값 참조가 필요하면 useState와 비슷하게 함수를 전달하고, 전달된 첫 번째 인자로 현재 상태 접근 가능
        set(state => ({ count: state.count + 1 }))
    },
    decrement: () => {
        set(state => ({ count: state.count - 1 }))
    },
    // 함수를 정의하는 것이므로 전달받을 인자값이 필요하면 자유롭게 설정 가능
    add: (value) => {
        set(state => ({ count: state.count + value }))
    },
    // 이전 상태값에 대한 참조가 필요 없으면 바로 상태값 지정
    set: (value) => {
        set({ count: value })
    },
    // async 함수 추가
    incrementAsync: async () => {
        // sleep 함수 흉내내기
        await new Promise((resolve) => setTimeout(resolve, 1000))
        // 상태 변경
        set(state => ({ ...state, count: state.count + 1 }))
    },
}))

export default useCounterStore;