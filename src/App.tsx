import React from 'react';
import { Provider } from 'react-redux';
import IntlProvider from '@/data/l10n/IntlProvider';
import { store } from './data/store';
import Routes from './main/routes/routes';

function App() {
  return (
    <Provider store={store}>
      <IntlProvider>
        <Routes />
      </IntlProvider>
    </Provider>
  );
}

export default App;
