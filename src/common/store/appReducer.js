import { INIT_IS_CLICKED_OBJ } from "./types";

const appReducer = (state = {}, action) => {
    switch(action.type) {
        case INIT_IS_CLICKED_OBJ:
            return {
                isClickiedObj: action.payload
            }
        default: return state;
    };
}

export default appReducer;