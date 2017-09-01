import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middleWare = [thunk];

export default configureStore = () => {
  const store = createStore(reducers, applyMiddleware(...middleWare));

  return store;
};
