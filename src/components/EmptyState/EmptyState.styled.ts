// Constants
import { BREAKPOINTS } from '@/constants';
// Libreries
import { styled } from 'styled-components';
import { Icon } from '..';

export const EmptyStateStyled = styled.div`
  background: ${({ theme }) => theme.palette.default.background2};
  margin: 0 auto;
  padding: 16px 24px;
  text-align: center;
  border-radius: 8px;
  width: 400px;
  svg {
    margin: 32px 0;
  }
  .title {
    margin-bottom: 16px;
  }
  .description {
    margin-bottom: 32px;
  }
  @media (max-width: ${BREAKPOINTS.small}) {
    width: 100%;
  }
`;

export const IconStyled = styled(Icon)``;
