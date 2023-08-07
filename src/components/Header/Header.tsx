// React
import { Link } from 'react-router-dom';
// Constants
import { CONFIG, SupportedPages } from '@/constants';
// Components
import { Icon } from '..';
// Styled components
import {
  ButtonsContainer,
  HeaderStyled,
  Logo,
  ThemeButton,
} from './Header.styled';
// Libreries
import { Toolbar, Container } from '@mui/material';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { useDarkMode } from 'usehooks-ts';

/**
 * Functional component that render component header.
 *
 * @return React.ReactElement <Header/>
 */
const Header = () => {
  const { toggle } = useDarkMode();
  const { branding } = CONFIG;

  return (
    <HeaderStyled>
      <Container>
        <Toolbar>
          <Link to={SupportedPages.Home}>
            <Logo src={branding.header.logo} />
          </Link>
          <ButtonsContainer></ButtonsContainer>
          <ThemeButton size='small' onClick={toggle}>
            <Icon icon={faLightbulb} />
          </ThemeButton>
        </Toolbar>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
