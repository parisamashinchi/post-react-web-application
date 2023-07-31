import {
    createStore, combineReducers, applyMiddleware,
} from 'redux';
import { createLogger } from 'redux-logger';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';
import LoadingReducer from '../containers/loading/reducer';
import * as constants from './constants';
import AuthenticationReducer from '../components/authentication/reducer'
import { createBrowserHistory } from 'history';
import {connectRouter} from "connected-react-router";
const sagaMiddleware = createSagaMiddleware();

// redux persist config
const persistConfig = {
    key: 'root',
    storage,
};
const history = createBrowserHistory();
// set all reducers as RootReducer
const appReducer = combineReducers({
    Authentication: AuthenticationReducer,
    LoadingReducer,

});

const sagas = function* () {
    yield [
        // ...LocaleSagas,

    ];
};

const RootReducer = (state, action) => {
    if (action.type === constants.SET_LOGOUT_USER) {
        Object.keys(state)
            .forEach((key) => {
                if (key !== 'LayoutReducer') {
                    storage.removeItem(`persist:${key}`);
                }
            });
    }
    return combineReducers({
        router: connectRouter(history),
    })(state, action);
};

const persistedReducer = persistReducer(persistConfig, RootReducer);
const logger = createLogger();

// export store with persistedReducer
export const store = createStore(
    persistedReducer,
    applyMiddleware(
        sagaMiddleware,
        logger,
    ),
);

sagaMiddleware.run(sagas);

export {history};
export const persistor = persistStore(store);

