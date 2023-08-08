// Components
import { logoMBDark, logoMBLight } from '@/assets';
import { Text } from '..';
// Constants
import { version } from '../../../package.json';
// Styled components
import {
  ContentText,
  ExternalLink,
  FooterLogo,
  FooterStyled,
} from './Footer.styled';
// Libreries
import { Grid } from '@mui/material';
import { CONFIG } from '@/constants';

/**
 * Functional component that render component footer.
 *
 * @return React.ReactElement <Footer/>
 */
const Footer = () => {
  return (
    <FooterStyled>
      <Grid container justifyContent='center' spacing={2}>
        <Grid item xs={12} sm={2}>
          <FooterLogo src={logoMBDark} />
        </Grid>
        <Grid item xs={12} sm={4}>
          <ContentText>
            <Text fontWeight='medium'>
              Southern Challenge{' '}
              <ExternalLink href={`${CONFIG.sites.githubVersion}/${version}`}>
                v{version}
              </ExternalLink>
            </Text>
            <Text fontWeight='medium'>
              Powered by{' '}
              <ExternalLink href={CONFIG.sites.react} color='inherit'>
                React
              </ExternalLink>{' '}
              and{' '}
              <ExternalLink href={CONFIG.sites.vite} color='inherit'>
                ViteJS
              </ExternalLink>
            </Text>
            <Text fontWeight='medium'>Developed by Martin Bobbio</Text>
          </ContentText>
        </Grid>
      </Grid>
    </FooterStyled>
  );
};

export default Footer;
