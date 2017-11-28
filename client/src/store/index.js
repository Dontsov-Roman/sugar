import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import reducers from '../reducers'

export function configureStore() {
    const store = compose(
            applyMiddleware(thunk),
    )(createStore)(reducers);

    // syncTranslationWithStore(store);
    // store.dispatch(loadTranslations(translationsObject));
    // store.dispatch(setLocale(LOCALE_EN));

    // if (module.hot) {
    //     module.hot.accept('../reducers', () => {
    //         const nextRootReducer = require('../reducers').rootReducer;
    //         store.replaceReducer(nextRootReducer)
    //     })
    // }

    return store
}
export default configureStore();
