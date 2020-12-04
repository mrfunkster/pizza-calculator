import { GET_LOCATION } from "./types";

const appReducer = (state = { currentPathname: "/" }, action) => {
    switch(action.type) {
        case GET_LOCATION:
            return { ...state, currentPathname: action.payload }
        default: return state;
    };
}

export default appReducer;