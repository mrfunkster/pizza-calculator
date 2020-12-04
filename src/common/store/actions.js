import { INIT_IS_CLICKED_OBJ, SWITCH_TO_EN, SWITCH_TO_RU } from "./types";

export const initIsClickedObject = (payload) => ({
    type: INIT_IS_CLICKED_OBJ,
    payload
})

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