import { BACK_TO_CALCULATION_INPUTS, CALCULATE_BY_FLOUR, CALCULATE_INPUTS, INPUT_HANDLER, IS_FRESH_YEAST, RADIO_TOGGLE, RESET_INPUTS } from "./types"

const initialState = {
    calculateBy: "",
    isCalculated: false,
    ballWeight: 220,
    pizzaCount: 1,
    isFresh: false,
    flourWeight: 132,
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
        case RADIO_TOGGLE:
            return {
                ...state,
                calculateBy: action.value
            }
        case CALCULATE_INPUTS:
            return {
                ...state,
                isCalculated: true,
                flourWeight: Math.round(state.pizzaCount * state.ballWeight * 0.559),
                waterWeight: Math.round(state.pizzaCount * state.ballWeight * 0.559 * 0.65),
                sugarWeight: (state.pizzaCount * state.ballWeight * 0.559 * 0.03).toFixed(1),
                saltWeight: (state.pizzaCount * state.ballWeight * 0.559 * 0.015).toFixed(1),
                oliveOilWeight: Math.round(state.pizzaCount * state.ballWeight * 0.559 * 0.08),
                yeastWeight: state.isFresh ? (state.pizzaCount * state.ballWeight * 0.559 * 0.015).toFixed(1) : (state.pizzaCount * state.ballWeight * 0.559 * 0.008).toFixed(1)
            }
        case CALCULATE_BY_FLOUR:
            return {
                ...state,
                isCalculated: true,
                waterWeight: Math.round(state.flourWeight * 0.65),
                oliveOilWeight: Math.round(state.flourWeight * 0.08),
                sugarWeight: (state.flourWeight * 0.03).toFixed(1),
                saltWeight: (state.flourWeight * 0.015).toFixed(1),
                yeastWeight: state.isFresh ? (state.flourWeight * 0.015).toFixed(1) : (state.flourWeight * 0.008).toFixed(1),
                ballWeight: Math.round(state.flourWeight / 55.9 * 100),
                pizzaCount: 1
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