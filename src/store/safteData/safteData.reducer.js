import { GET_DATA } from './safteData.constans'
import { initialValue } from "./safteData.initial";

export function safteDataReducer(state = initialValue, action) {
    switch (action.type) {
        case GET_DATA:
            return { ...state, safteData: action.payload }
        default:
            break;
    }
    return state
}