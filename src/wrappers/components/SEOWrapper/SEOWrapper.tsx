// Libreries
import { Helmet } from 'react-helmet';

// Component props
interface SEOWrapperProps {
  children: React.ReactNode;
}

/**
 * Functional component that render high order component seo with their logic.
 *
 * @return React.ReactElement <SEOWrapper/>
 */
const SEOWrapper = ({ children }: SEOWrapperProps) => {
  return (
    <>
      <Helmet>
        <title>Southern: Challenge NASA</title>
        <meta name='description' content='This page is for a challenge' />
      </Helmet>
      {children}
    </>
  );
};

export default SEOWrapper;
