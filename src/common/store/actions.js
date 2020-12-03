import { DARK_MODE, LIGHT_MODE, SYSTEM_DARK_MODE, SYSTEM_LIGHT_MODE } from "./types"

export const darkMode = () => {
    return {
        type: DARK_MODE
    }
}

export const lightMode = () => {
    return {
        type: LIGHT_MODE
    }
}

export const systemDarkMode = () => {
    return {
        type: SYSTEM_DARK_MODE
    }
}

export const systemLightMode = () => {
    return {
        type: SYSTEM_LIGHT_MODE
    }
}