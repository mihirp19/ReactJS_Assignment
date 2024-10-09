import { INSERT, UPDATE, DELETE } from "./actions";
const initialState = { data:[] };

const Reducer = (state=initialState, action) => {
    switch(action){
        case INSERT: return{
            ...state,
            data:[...state.data, action.payload]
        }
        case UPDATE: return{
            ...state,
            data:state.data.map((i)=>{
                return (i.id === action.payload.id) ? action.payload.data:i;
            })
        }
    }
}


export default Reducer