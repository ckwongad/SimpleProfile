import { AsyncStorage } from 'react-native';
import { applyMiddleware, createStore } from 'redux';
//import { autoRehydrate, persistStore } from 'redux-persist'
import thunk from 'redux-thunk';
import reducers from '../reducers';

const middleWare = [thunk];

export default configureStore = () => {
  const store = createStore(reducers, applyMiddleware(...middleWare));

  return store;
};
