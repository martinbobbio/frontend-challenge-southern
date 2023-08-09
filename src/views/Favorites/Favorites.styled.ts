// Constants
import { BREAKPOINTS } from '@/constants';
// Libreries
import { styled } from 'styled-components';

export const FavoritesStyled = styled.div`
  text-align: left;
  margin: 32px 0 64px 0;
  @media (max-width: ${BREAKPOINTS.small}) {
    margin: 16px 0 124px 0;
  }
  .title {
    margin-bottom: 32px;
  }
`;
