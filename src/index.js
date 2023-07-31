import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './store/ConfigureStore';
import PublicRoutes from "../src/routers/AppRouter";
import "./index.css"
import './routers/global.less';
import 'antd/dist/antd.css';

ReactDOM.render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <PublicRoutes />
        </PersistGate>
    </Provider>,
    global.document.querySelector('#root'),
);
