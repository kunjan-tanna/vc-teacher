import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import PageSpinner from 'components/PageSpinner';
import 'bootstrap/dist/css/bootstrap.css';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/storeConfig/store';
import { PersistGate } from 'redux-persist/integration/react';

const LazyApp = lazy(() => import('./App'));

ReactDOM.render(
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      <HashRouter>
        <React.Suspense fallback={<PageSpinner />}>
          <LazyApp />
        </React.Suspense>
      </HashRouter>
    </PersistGate>
  </Provider>,

  document.getElementById('root'),
);
