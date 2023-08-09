// Compopnents
import { BREAKPOINTS } from '@/constants';
// Libreries
import { styled } from 'styled-components';

export const HomeStyled = styled.div`
  margin: 64px 0;
  @media (max-width: ${BREAKPOINTS.small}) {
    margin: 32px 0 124px 0;
  }
`;
