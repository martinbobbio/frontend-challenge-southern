// Constants
import { BREAKPOINTS } from '@/constants';
import { styled } from 'styled-components';
// Libreries
import { Grid } from '@mui/material';

export const RoverStyled = styled.div`
  margin: 32px 0 64px 0;
  @media (max-width: ${BREAKPOINTS.small}) {
    margin: 16px 0 124px 0;
  }
`;

export const FilterChipsContainer = styled.div`
  text-align: left;
  margin: 16px 0;
`;

export const LayoutTwoColumns = styled(Grid)`
  align-items: center;
`;

export const LeftColumn = styled(Grid)`
  text-align: left;
`;

export const RightColumn = styled(Grid)`
  text-align: right;
  button svg {
    margin-bottom: 2px;
  }
`;
