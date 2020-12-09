import { BACK_TO_CALCULATION_INPUTS, CALCULATE_BY_FLOUR, CALCULATE_INPUTS, INPUT_HANDLER, IS_FRESH_YEAST, RADIO_TOGGLE, RESET_INPUTS, SWITCH_TO_EN, SWITCH_TO_RU } from "./types";

export const switchToEN = () => {
    return {
        type: SWITCH_TO_EN
    }
}

export const switchToRU = () => {
    return {
        type: SWITCH_TO_RU
    }
}

export const isFreshYeast = (payload) => {
    return {
        type: IS_FRESH_YEAST,
        payload
    }
}

export const inputHandler = (key, value) => {
    return {
        type: INPUT_HANDLER,
        key, value
    }
}

export const radioToggle = (value) => {
    return {
        type: RADIO_TOGGLE,
        value
    }
}

export const resetInputs = () => {
    return {
        type: RESET_INPUTS
    }
}

export const calculateInputs = () => {
    return {
        type: CALCULATE_INPUTS
    }
}

export const calculateByFlour = () => {
    return {
        type: CALCULATE_BY_FLOUR
    }
}

export const backToCalculationInputs = () => {
    return {
        type: BACK_TO_CALCULATION_INPUTS
    }
}