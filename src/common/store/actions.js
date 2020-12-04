import { GET_LOCATION } from "./types";

export const getLocationPathname = (payload) => ({
    type: GET_LOCATION,
    payload
})