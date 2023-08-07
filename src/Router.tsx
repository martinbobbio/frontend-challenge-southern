// React
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// Components
import { Home, Rover, NotFound } from '@/views';
import App from '@/App';
// Constants
import { SupportedPages } from '@/constants';

/**
 * Functional component that render the router and wrap the application.
 *
 * @return React.ReactElement <Router/>
 */
const Router = () => {
  /**
   * Functional component that wrap the views and add logics.
   *
   */
  const wrapApplication = (view: React.ReactNode) => {
    return <App>{view}</App>;
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path={SupportedPages.Home} element={wrapApplication(<Home />)} />
        <Route
          path={SupportedPages.Curiosity}
          element={wrapApplication(<Rover />)}
        />
        <Route
          path={SupportedPages.Opportunity}
          element={wrapApplication(<Rover />)}
        />
        <Route
          path={SupportedPages.Spirit}
          element={wrapApplication(<Rover />)}
        />
        <Route
          path={SupportedPages.NotFound}
          element={wrapApplication(<NotFound />)}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
