import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

import { ICartState } from './modules/cart/types';

export type IState = {
  cart: ICartState;
};

const sageMiddleware = createSagaMiddleware();

const middlewares = [sageMiddleware];

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);

sageMiddleware.run(rootSaga);

export default store;
