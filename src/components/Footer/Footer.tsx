// Components
import { Text } from '..';
// Constants
import { version } from '../../../package.json';
// Styled components
import { FooterStyled } from './Footer.styled';

/**
 * Functional component that render component footer.
 *
 * @return React.ReactElement <Footer/>
 */
const Footer = () => {
  return (
    <FooterStyled>
      <Text fontWeight='medium'>Southern Challenge v{version}</Text>
      <Text fontWeight='medium'>Powered by React and ViteJS</Text>
      <Text fontWeight='medium'>Developed by Martin Bobbio</Text>
    </FooterStyled>
  );
};

export default Footer;
