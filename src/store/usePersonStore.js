import { create } from "zustand"

const usePersonStore = create((set) => ({
    firstName: '',
    lastName: '',
    updateFirstName: (name) => {
        set({firstName: name})
    },
    updateLastName: (name) => {
        set({lastName: name})
    }
    
}))

export default usePersonStore;