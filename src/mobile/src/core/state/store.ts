import {compose, applyMiddleware, createStore, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import {authReducer} from '../auth/auth-reducer';
import { IState } from './state';

const enhancer = compose(
    applyMiddleware(logger),
    applyMiddleware(thunk),
);

const reducer = combineReducers<IState>({
    auth: authReducer,
});

export const store = createStore(reducer, enhancer);