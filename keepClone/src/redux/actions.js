export const INSERT = 'INSERT'
export const UPDATE = 'UPDATE'
export const DELETE = 'DELETE'
export const DISPLAY = 'DISPLAY'

export const createNote = (data) => {
    return{
        type:INSERT,
        payload:data
    }
}
export const updateNote = (id,data) => {
    return{
        type:UPDATE,
        payload:{id, data}
    }
}
export const deleteNote = (id) => {
    return{
        type:DELETE,
        payload:id
    }
}
export const displayNote = () => {
    return{
        type:DISPLAY
    }
}