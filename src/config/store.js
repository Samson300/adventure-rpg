import { createStore, combineReducers } from 'redux';
import playerReducer from '../features/player/reducer';
import mapReducer from '../features/map/reducer';

const rootReducer = combineReducers({
    player: playerReducer,
    map: mapReducer
})

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS__EXTENTION__ && Window.__REDUX_DEVTOOLS__EXTENTION__()
)

export default store;