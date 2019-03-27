

import React, {
    PureComponent,
} from 'react';
import { Provider } from 'react-redux';
import store from './configureStore';
import AppWithNavigationState from './appNavigator';

class App extends PureComponent {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

export default App;
