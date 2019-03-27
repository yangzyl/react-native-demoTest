import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import createSagaMiddleware, { END } from 'redux-saga';
import rootReducer from './reducers';


const loggerMiddleware = createLogger();
const sagaMiddleware = createSagaMiddleware();


const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

function configureStore(initialState) {
    const store = createStore(
        rootReducer,
        initialState,
        applyMiddleware(
            loggerMiddleware,
            sagaMiddleware,
        ),
    );

    if (module.hot) {
        module.hot.accept(() => {
            const nextRootReducer = require('./reducers/index').default;
            store.replaceReducer(nextRootReducer);
        });
    }

    if (isDebuggingInChrome) {
        window.store = store;
    }

    return store;
}

export default configureStore();
