import { combineReducers } from 'redux'
import appReducer from './appReducer';
import languageReducer from './languageReducer';

const rootReducer = combineReducers({
    appState: appReducer,
    localization: languageReducer
});

export default rootReducer;