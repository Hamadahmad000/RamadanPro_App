import { Add_Surah_TO_fav, Remove_Surah_From_fav } from "../ActionTypes";

const initialState = []
const FavSurahReducer = (state = initialState,action)=>{
    switch (action.type) {
        case Add_Surah_TO_fav:
           return [...state,action.payload] 
            break;
        case Remove_Surah_From_fav:
            const filtereddata = state.filter((ls,index)=>{
                return index !== action.payload
            })
            return filtereddata
        default:
            return state
    }
}


export default FavSurahReducer