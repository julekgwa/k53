import { createStore } from 'redux';

import { rootReducer } from 'app/redux/reducers';

export const store = createStore(rootReducer);