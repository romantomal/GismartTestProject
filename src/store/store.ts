import {compose, createStore, Store} from 'redux';

import { IAction, IAppState } from './models';
import rootReducer from './rootReducer';
import enhancer from './enhancer';

export type TAppStore = Store<IAppState>

const composeEnhancers = (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const store: TAppStore = createStore<IAppState, IAction<any>, any, any>(rootReducer,  composeEnhancers(enhancer));

export default store;
