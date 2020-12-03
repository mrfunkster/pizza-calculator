import { DARK_MODE, LIGHT_MODE, SYSTEM_DARK_MODE, SYSTEM_LIGHT_MODE } from "./types"

const modeReducer = (state = { isDarkMode: false, isSystemDarkMode: false }, action) => {
    switch(action.type) {
        case DARK_MODE:
            return { ...state, isDarkMode: true };
        case LIGHT_MODE:
            return { ...state, isDarkMode: false };
        case SYSTEM_DARK_MODE:
            return { ...state, isSystemDarkMode: true};
        case SYSTEM_LIGHT_MODE:
            return {...state, isSystemDarkMode: false}
        default: return state;
    };
}

export default modeReducer;