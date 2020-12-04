import localization from "../localization/localization"
import { SWITCH_TO_EN, SWITCH_TO_RU } from "./types"

const languageReducer = (state = localization.en, action) => {
    switch(action.type) {
        case SWITCH_TO_EN:
            return localization.en
        case SWITCH_TO_RU:
            return localization.ru
        default: return state
    }
}

export default languageReducer