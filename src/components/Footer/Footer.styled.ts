// Libreries
import { Link } from '@mui/material';
import { styled } from 'styled-components';

export const FooterStyled = styled.div`
  position: absolute;
  bottom: 0;
  padding: 32px;
  width: 100%;
  font-weight: 500;
  background: ${({ theme }) => theme.palette.primary.main};
`;

export const FooterLogo = styled.img`
  height: 64px;
  width: 64px;
`;

export const ContentText = styled.div`
  text-align: left;
`;

export const ExternalLink = styled(Link)`
  cursor: pointer;
`;
