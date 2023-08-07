// React
import React from 'react';
import ReactDOM from 'react-dom/client';
// Components
import Router from './Router.tsx';
import { ThemeWrapper, SEOWrapper, SWRWrapper } from '@/wrappers';
// Context
import { GlobalProvider } from '@/contexts';
// Styles
import GlobalStyles from './GlobalStyles';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <GlobalProvider>
    <SEOWrapper>
      <SWRWrapper>
        <GlobalStyles />
        <ThemeWrapper>
          <React.StrictMode>
            <Router />
          </React.StrictMode>
        </ThemeWrapper>
      </SWRWrapper>
    </SEOWrapper>
  </GlobalProvider>
);
