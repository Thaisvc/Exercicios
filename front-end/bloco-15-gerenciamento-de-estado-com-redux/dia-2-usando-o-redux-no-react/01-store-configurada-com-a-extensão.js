import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from '../reducers';

const store = createStore(rootReducer, composeWithDevTools());

export default store;
// A função createStore sempre receberá como parâmetro um rootReducer. Portanto, deve-se criar um rootReducer no arquivo