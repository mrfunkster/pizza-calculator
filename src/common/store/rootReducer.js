import { combineReducers } from 'redux'
import appReducer from './appReducer';
import calculateReducer from './calculateReducer';
import languageReducer from './languageReducer';

const rootReducer = combineReducers({
    appState: appReducer,
    localization: languageReducer,
    calculationData: calculateReducer
});

export default rootReducer;