import {compose, applyMiddleware, createStore} from 'redux';
import logger from 'redux-logger';

const enhancer = compose(
    applyMiddleware(logger),
);

const reducer = function(state: any = {}) {
    return state;
};

export const store = createStore(reducer, enhancer);