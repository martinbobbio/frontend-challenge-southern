// React
import { Link } from 'react-router-dom';
// Constants
import { CONFIG, SupportedPages } from '@/constants';
// Components
import { Icon } from '..';
// Styled components
import { ButtonsContainer, HeaderStyled, Logo } from './Header.styled';
// Libreries
import { Toolbar, Container, IconButton } from '@mui/material';
import { faLightbulb, faStar } from '@fortawesome/free-solid-svg-icons';
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
          <IconButton className='favorites' size='small'>
            <Link to={SupportedPages.Favorites}>
              <Icon icon={faStar} />
            </Link>
          </IconButton>
          <IconButton size='small' onClick={toggle}>
            <Icon icon={faLightbulb} />
          </IconButton>
        </Toolbar>
      </Container>
    </HeaderStyled>
  );
};

export default Header;
