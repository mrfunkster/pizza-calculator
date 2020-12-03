import { combineReducers } from 'redux'

import modeReducer from './modeReducer'

const rootReducer = combineReducers({
    modeState: modeReducer
});

export default rootReducer;