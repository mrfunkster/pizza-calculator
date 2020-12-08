import { INPUT_HANDLER, IS_FRESH_YEAST, RESET_INPUTS } from "./types"

const initialState = {
    ballWeight: 220,
    pizzaCount: 1,
    isFresh: true
}

const calculateReducer = (state = initialState, action) => {
    switch(action.type) {
        case IS_FRESH_YEAST:
            return {
                ...state,
                isFresh: action.payload
            }
        case INPUT_HANDLER:
            return {
                ...state,
                [action.key]: action.value 
            }
        case RESET_INPUTS:
            return initialState
        default: return state
    }
}

export default calculateReducer