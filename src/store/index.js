import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import { detailsReducer } from './reducers/details';
import { mapReducer } from './reducers/map';

const rootReducer = combineReducers({
  map: mapReducer,
  details: detailsReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
