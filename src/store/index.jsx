import { createStore, applyMiddleware, compose} from 'redux';
import cReducer from './reducer';
import thunk from 'redux-thunk'


// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({trace:true}) || compose;

const storeEnhancer = applyMiddleware(thunk);

const store = createStore(cReducer, storeEnhancer);

export default store;