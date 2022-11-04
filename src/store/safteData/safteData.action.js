import { GET_DATA } from "./safteData.constans";

export const getData = (data) => {
    return {
        type: GET_DATA,
        payload: data
    }
}