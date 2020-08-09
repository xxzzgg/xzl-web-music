import React, { memo } from 'react';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import routes from './router';

import ZLFooter from '@/components/app-footer';
import ZLHeadr from '@/components/app-header';
import { BrowserRouter } from 'react-router-dom';
import store from './store';
export default memo(function App() {
  return (
  <Provider store={store}>
    <BrowserRouter>
        <ZLHeadr />
        {renderRoutes(routes)}
        <ZLFooter />
      </BrowserRouter>
  </Provider>
  )
})
