import { BACK_TO_CALCULATION_INPUTS, CALCULATE_INPUTS, INPUT_HANDLER, IS_FRESH_YEAST, RESET_INPUTS } from "./types"

const initialState = {
    isCalculated: false,
    ballWeight: 220,
    pizzaCount: 1,
    isFresh: true,
    flourWeight: "",
    waterWeight: "",
    sugarWeight: "",
    saltWeight: "",
    yeastWeight: "",
    oliveOilWeight: ""
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
        case CALCULATE_INPUTS:
            return {
                ...state,
                isCalculated: true,
                flourWeight: (state.pizzaCount * state.ballWeight * 0.6).toFixed(1),
                waterWeight: (state.pizzaCount * state.ballWeight * 0.32).toFixed(1),
                sugarWeight: (state.pizzaCount * state.ballWeight * 0.018).toFixed(1),
                saltWeight: (state.pizzaCount * state.ballWeight * 0.009).toFixed(1),
                oliveOilWeight: (state.pizzaCount * state.ballWeight * 0.048).toFixed(1),
                yeastWeight: state.isFresh ? (state.pizzaCount * state.ballWeight * 0.0025).toFixed(1) : (state.pizzaCount * state.ballWeight * 0.005).toFixed(1)
            }
        case RESET_INPUTS:
            return initialState
        case BACK_TO_CALCULATION_INPUTS:
            return {
                ...state,
                isCalculated: false
            }
        default: return state
    }
}

export default calculateReducer